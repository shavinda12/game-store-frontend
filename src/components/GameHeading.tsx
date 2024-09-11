import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenreName from "../hooks/useGenreName";
import usePlatformName from "../hooks/usePlatformName";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  
  const selectGenre=useGenreName(gameQuery.genreId)
  const selectPlatform=usePlatformName(gameQuery.platformId)
  
  const heading = `${gameQuery.platformId ? selectPlatform?.name: ""} ${
    gameQuery.genreId ? selectGenre?.name: ""
  } Games`;
  return (
    <Heading as="h1" size="4xl" my={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
