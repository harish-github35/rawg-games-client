import { Heading } from "@chakra-ui/layout";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatfoms";
import useGameQueryStore from "../store";
import { Helmet } from "react-helmet";

const GameHeading = () => {
  const pId = useGameQueryStore((s) => s.gameQuery.platformId);
  const gId = useGameQueryStore((s) => s.gameQuery.genreId);

  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const p = platforms?.results.find((p) => p.id === pId)?.name || "";
  const g = genres?.results.find((g) => g.id === gId)?.name || "";

  const heading = `${p} ${g} Games`;

  return (
    <>
      {heading.trim() !== "Games" && (
        <Helmet>
          <title>{heading} | Rawg Games Client</title>
        </Helmet>
      )}
      <Heading marginY={5} fontSize="5xl" as="h1">
        {heading}
      </Heading>
    </>
  );
};

export default GameHeading;
