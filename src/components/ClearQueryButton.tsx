import { Button } from "@chakra-ui/button";
import useGameQueryStore from "../store";

const ClearQueryButton = () => {
  const resetFilters = useGameQueryStore((s) => s.resetFilters);
  const pId = useGameQueryStore((s) => s.gameQuery.platformId);
  const gId = useGameQueryStore((s) => s.gameQuery.genreId);
  const order = useGameQueryStore((s) => s.gameQuery.sortOrder);

  return (
    <>
      {(pId || gId || order) && (
        <Button onClick={() => resetFilters()}>clear filters</Button>
      )}
    </>
  );
};

export default ClearQueryButton;
