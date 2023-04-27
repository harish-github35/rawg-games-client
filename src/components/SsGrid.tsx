import { Image } from "@chakra-ui/image";
import useScreenshots from "../hooks/useScreenshots";
import { Spinner } from "@chakra-ui/spinner";
import getCroppedImageUrl from "../services/image-url";
import { SimpleGrid, Text } from "@chakra-ui/layout";

const SsGrid = ({ gameId }: { gameId: number }) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  // console.log("gameid passed to trailers:", gameId);
  // console.log(data);

  if (isLoading) return <Spinner />;

  if (error || !data) return <Text>{error.message}</Text>;

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
