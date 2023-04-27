import { GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useParams } from "react-router";
import DetailsGrid from "../components/DetailsGrid";
import GameDesc from "../components/GameDesc";
import GameTrailer from "../components/GameTrailer";
import SsGrid from "../components/SsGrid";
import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug || "");

  if (isLoading) return <Spinner />;

  if (error || !data) return <Text>{error.message}</Text>;

  return (
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
  );
};

export default GameDetailsPage;
