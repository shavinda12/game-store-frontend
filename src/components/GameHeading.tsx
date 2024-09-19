import { Heading } from "@chakra-ui/react";
import useGenreName from "../hooks/useGenreName";
import usePlatformName from "../hooks/usePlatformName";
import useGameQueryStore from "../stores/store";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const selectGenre = useGenreName(gameQuery.genreId);
  const selectPlatform = usePlatformName(gameQuery.platformId);

  const heading = `${gameQuery.platformId ? selectPlatform?.name : ""} ${
    gameQuery.genreId ? selectGenre?.name : ""
  } Games`;
  return (
    <Heading as="h1" size="4xl" my={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
