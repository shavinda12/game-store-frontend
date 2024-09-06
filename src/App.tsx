import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
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
        <NavBar />{" "}
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {" "}
          <GenreList onSelect={(genre)=>setSelectedGenre(genre)}/>{" "}
        </GridItem>
      </Show>
      <GridItem area="main">
        {" "}
        <GamesGrid selectedGenre={selectedGenre}/>{" "}
      </GridItem>
    </Grid>
  );
};

export default App;
