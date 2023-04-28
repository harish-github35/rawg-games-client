import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import useGameQueryStore from "../store";
import { BsFillXCircleFill } from "react-icons/bs";

const ClearQueryButton = () => {
  const resetFilters = useGameQueryStore((s) => s.resetFilters);
  const pId = useGameQueryStore((s) => s.gameQuery.platformId);
  const gId = useGameQueryStore((s) => s.gameQuery.genreId);
  const order = useGameQueryStore((s) => s.gameQuery.sortOrder);

  return (
    <>
      {(pId || gId || order) && (
        <Button onClick={() => resetFilters()}>
          <BsFillXCircleFill color="#666" size="1.2rem" />
          <Text ml={2}>clear filters</Text>
        </Button>
      )}
    </>
  );
};

export default ClearQueryButton;
