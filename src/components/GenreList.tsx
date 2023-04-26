//prettier-ignore
import {  Button,  HStack,  Heading,  Image,  List,  ListItem,  Spinner}from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre?: number;
  onSelectGenre: (id: number) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
                onClick={() => onSelectGenre(genre.id)}
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
