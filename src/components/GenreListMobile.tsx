import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";
import getCroppedImageUrl from "../utils/image-url";

const GenreListMobile = () => {
  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenre = useGameQueryStore((s) => s.setGenre);

  const { data, error, isLoading } = useGenres();
  if (error) return null;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex w="100%" overflow="auto" gap="10px" marginTop={3} paddingBottom={1}>
      {data?.results.map((genre) => (
        <SimpleGrid
          border="2px solid #3b3232"
          rounded="full"
          padding="0 3px"
          alignItems="center"
          templateColumns="auto 1fr"
          gap={1}
          key={genre.id}
          onClick={() => setGenre(genre.id)}
        >
          <Image
            objectFit="cover"
            boxSize="24px"
            minW="24px"
            rounded="full"
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Button
            size="sm"
            fontSize="1xl"
            variant="ghost"
            w="max-content"
            padding={1}
            fontWeight={selectedGenre === genre.id ? "bold" : "normal"}
          >
            {genre.name}
          </Button>
        </SimpleGrid>
      ))}
    </Flex>
  );
};

export default GenreListMobile;
