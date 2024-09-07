import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genres | null;
  platform: Platforms | null;
  sortOrder: string | null;
  search: string | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          setSearchInput={(search) => setGameQuery({ ...gameQuery, search })}
        />{" "}
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {" "}
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
          />{" "}
        </GridItem>
      </Show>
      <GridItem area="main">
        {" "}
        <Box px={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack mb={4}>
            <PlatformSelector
              platform={gameQuery.platform}
              onSelect={(platform) => setGameQuery({ ...gameQuery, platform })}
            />
            <SortSelector
              selectSort={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GamesGrid gameQuery={gameQuery} />{" "}
      </GridItem>
    </Grid>
  );
};

export default App;
