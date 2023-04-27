import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../Types";
import DList from "./DList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const DetailsGrid = ({ game }: Props) => {
  return (
    <SimpleGrid as="dl" columns={2} spacing={6} mt={5}>
      <DList dt="Available on">
        {game.parent_platforms.map((p) => (
          <Text key={p.platform.id}>{p.platform.name}</Text>
        ))}
      </DList>

      <DList dt="Metascore">
        <CriticScore score={game.metacritic} />
      </DList>

      <DList dt="Genre">
        {game.genres.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </DList>

      <DList dt="Publishers">
        {game.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DList>
    </SimpleGrid>
  );
};

export default DetailsGrid;
