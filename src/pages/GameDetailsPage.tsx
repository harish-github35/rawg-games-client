import { Spinner } from "@chakra-ui/spinner";
import { useParams } from "react-router";
import DetailsGrid from "../components/DetailsGrid";
import GameDesc from "../components/GameDesc";
import GameTrailer from "../components/GameTrailer";
import SsGrid from "../components/SsGrid";
import useGame from "../hooks/useGame";
import { Helmet } from "react-helmet";
import { GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import ErrorAlert from "../components/ErrorAlert";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading, isPaused } = useGame(slug || "");

  if (isPaused) return <ErrorAlert>no internet</ErrorAlert>;

  if (isLoading) return <Spinner />;

  if (error || !data) return <Text>{error.message}</Text>;

  return (
    <>
      <Helmet>
        <title>{data.name} | Rawg Games Client</title>
      </Helmet>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
        <GridItem>
          <Heading marginBottom={5}>{data.name}</Heading>
          <GameDesc text={data.description_raw} />
          <DetailsGrid game={data} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={data.id} />
          <SsGrid gameId={data.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
