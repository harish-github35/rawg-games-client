import { Grid, GridItem, Flex, Box } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        //prettier-ignore
        // above 0
        base: `"main"`,
        //above 994px
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* SIDEBAR LIST */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      {/* MAIN */}
      <GridItem area="main">
        <Box paddingLeft={2}>
          {/* ROW OF HEADING */}
          <GameHeading />

          {/* ROW OF DROPDOWNS */}
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>

        {/* GAMES */}
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
