import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        //prettier-ignore
        // above 0
        base: `"nav" 
               "main"`,
        //above 994px
        lg: `"nav   nav" 
             "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* NAVBAR */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>

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
}

export default App;
