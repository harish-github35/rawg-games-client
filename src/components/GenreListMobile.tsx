import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
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
    <Flex
      w="100%"
      h="50px"
      overflowX="scroll"
      overflowY="hidden"
      whiteSpace="nowrap"
      gap="10px"
      marginTop={3}
      alignItems="center"
    >
      {data?.results.map((genre) => (
        <Flex
          rounded="full"
          alignItems="center"
          gap={2}
          padding="5px"
          _hover={{
            backgroundColor: "#333;",
          }}
          bg={selectedGenre === genre.id ? "#444" : ""}
          key={genre.id}
          cursor="pointer"
          onClick={() => setGenre(genre.id)}
        >
          <Image
            objectFit="cover"
            boxSize="24px"
            minW="24px"
            rounded="full"
            src={getCroppedImageUrl(genre.image_background)}
          />
          <Text fontSize="sm">{genre.name}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default GenreListMobile;
