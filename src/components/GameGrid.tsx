import { Box, SimpleGrid, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useGames from "../hooks/useGames";
import ErrorAlert from "./ErrorAlert";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  //prettier-ignore
  const {data,error,isLoading,fetchNextPage,
    hasNextPage, isPaused} = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  if (!data && isPaused) return <ErrorAlert>no internet</ErrorAlert>;

  return (
    <InfiniteScroll
      dataLength={data?.pages.length || 0}
      next={() => fetchNextPage()}
      hasMore={hasNextPage || false}
      scrollThreshold={1}
      loader={
        !isPaused && (
          <Box display="flex" justifyContent="center">
            <Spinner padding="10px" marginY={5} />
          </Box>
        )
      }
    >
      {isPaused && <ErrorAlert>no internet</ErrorAlert>}
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
            <Link
              style={{ height: "100%" }}
              to={`/games/${game.slug}`}
              key={game.id}
            >
              <GameCardContainer>
                <GameCard game={game} />
              </GameCardContainer>
            </Link>
          ))
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
