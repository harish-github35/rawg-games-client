import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/spinner";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error || !data) return null;

  return data.results[0] ? (
    <video
      src={data.results[0]?.data[480]}
      controls
      poster={data.results[0]?.preview}
    ></video>
  ) : null;
};

export default GameTrailer;
