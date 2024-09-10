import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: genres } = useGenres();
  const {data:platforms}=usePlatform()
  const selectedPlatformName=platforms?.results.find((p)=>p.id===gameQuery.platformId)
  const selectedGenreName = genres?.results.find((g) => g.id === gameQuery.genreId);
  const heading = `${gameQuery.platformId ? selectedPlatformName?.name: ""} ${
    gameQuery.genreId ? selectedGenreName?.name : ""
  } Games`;
  return (
    <Heading as="h1" size="4xl" my={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
