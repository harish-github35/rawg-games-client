import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/spinner";
import { Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { colorMode } = useColorMode();
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error) return null;

  if (!data || !data.results[0])
    return (
      <Text
        paddingBlock={4}
        paddingInline={2}
        color="gray.600"
        bg={colorMode === "light" ? "gray.100" : "gray.700"}
        rounded={5}
        textAlign="center"
        mb={5}
      >
        no trailers found
      </Text>
    );

  return data.results[0] ? (
    <video
      src={data.results[0]?.data[480]}
      controls
      poster={data.results[0]?.preview}
    ></video>
  ) : null;
};

export default GameTrailer;
