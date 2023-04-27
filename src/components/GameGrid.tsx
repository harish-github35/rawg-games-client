import { Text, SimpleGrid, Spinner, Box } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Link } from "react-router-dom";

const GameGrid = () => {
  //prettier-ignore
  const {data,error,isLoading,fetchNextPage,
    hasNextPage} = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={data?.pages.length || 0}
      next={() => fetchNextPage()}
      hasMore={hasNextPage || false}
      scrollThreshold={1}
      loader={
        <Box display="flex" justifyContent="center">
          <Spinner padding="10px" marginY={5} />
        </Box>
      }
    >
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages?.map((page) =>
          page.results.map((game) => (
            <Link to={`/games/${game.slug}`} key={game.id}>
              <GameCardContainer>
                <GameCard game={game} />
              </GameCardContainer>
            </Link>
          ))
        )}
      </SimpleGrid>
      {/* {hasNextPage && (
        <Button
          marginY={5}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "loading data" : "Load more"}
        </Button>
      )} */}
    </InfiniteScroll>
  );
};

export default GameGrid;
