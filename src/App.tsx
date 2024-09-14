import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";




const App = () => {


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      p={4}
    >
      <GridItem area="nav">
        {" "}
        <NavBar
        />{" "}
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {" "}
          <GenreList
          />{" "}
        </GridItem>
      </Show>
      <GridItem area="main">
        {" "}
        <Box px={2}>
          <GameHeading/>
          <HStack mb={4}>
            <PlatformSelector/>
            <SortSelector/>
          </HStack>
        </Box>
        <GamesGrid/>{" "}
      </GridItem>
    </Grid>
  );
};

export default App;
