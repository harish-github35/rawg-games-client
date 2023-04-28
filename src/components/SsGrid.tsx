import { Image } from "@chakra-ui/image";
import useScreenshots from "../hooks/useScreenshots";
import { Spinner } from "@chakra-ui/spinner";
import getCroppedImageUrl from "../services/image-url";
import { SimpleGrid, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";

const SsGrid = ({ gameId }: { gameId: number }) => {
  const { colorMode } = useColorMode();
  const { data, error, isLoading } = useScreenshots(gameId);
  // console.log("gameid passed to trailers:", gameId);
  // console.log(data);

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error.message}</Text>;

  if (!data || !data.results[0])
    return (
      <Text
        paddingBlock={4}
        paddingInline={2}
        color="gray.600"
        bg={colorMode === "light" ? "gray.100" : "gray.700"}
        rounded={5}
        textAlign="center"
      >
        no screenshots found
      </Text>
    );

  return (
    <SimpleGrid paddingTop={5} columns={{ base: 1, md: 2 }}>
      {data.results?.map(
        (ss) =>
          !ss.isdeleted && (
            <Image src={getCroppedImageUrl(ss.image)} key={ss.id} />
          )
      )}
    </SimpleGrid>
  );
};

export default SsGrid;
