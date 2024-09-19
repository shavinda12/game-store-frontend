import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GamesGrid from "../components/GamesGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      p={4}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {" "}
          <GenreList />{" "}
        </GridItem>
      </Show>
      <GridItem area="main">
        {" "}
        <Box px={2}>
          <GameHeading />
          <HStack mb={4}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GamesGrid />{" "}
      </GridItem>
    </Grid>
  );
};

export default HomePage;
