import { Button } from "@chakra-ui/button";
import { HStack, Heading, List, ListItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Spinner } from "@chakra-ui/spinner";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenre = useGameQueryStore((s) => s.setGenre);

  const { data, error, isLoading } = useGenres();
  if (error) return null;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY="5px">
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                textAlign="left"
                whiteSpace="break-spaces"
                overflow="clip"
                fontSize="lg"
                variant="link"
                onClick={() => setGenre(genre.id)}
                fontWeight={selectedGenre === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
