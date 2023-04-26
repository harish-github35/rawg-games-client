import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatfoms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery: { genreId, platformId } }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const p = platforms?.results.find((p) => p.id === platformId)?.name || "";
  const g = genres?.results.find((g) => g.id === genreId)?.name || "";

  const heading = `${p} ${g} Games`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
