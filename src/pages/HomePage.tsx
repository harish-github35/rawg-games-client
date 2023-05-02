import { Box, Flex, Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import { Helmet } from "react-helmet";
import ClearQueryButton from "../components/ClearQueryButton";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import GenreListMobile from "../components/GenreListMobile";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | Rawg Games Client</title>
      </Helmet>
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
        <GridItem area="main" overflow="hidden">
          <Box paddingLeft={2}>
            {/* ROW OF HEADING */}
            <GameHeading />
            {/* Topbar LIST */}
            <Show below="lg">
              <GenreListMobile />
            </Show>
            {/* ROW OF DROPDOWNS */}
            <Flex marginY={5} gap={5} flexWrap="wrap">
              <PlatformSelector />
              <SortSelector />
              <ClearQueryButton />
            </Flex>
          </Box>
          {/* GAMES */}
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
