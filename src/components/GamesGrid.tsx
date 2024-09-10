import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface GamesGridProps {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: GamesGridProps) => {
  const { data, error, isLoading } = useGames(gameQuery); //in here useGame function is called
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={7}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer>
            <LoadingSkeleton key={skeleton} />
          </GameCardContainer>
        ))}
      {data?.results?.map((rows) => (
        <GameCard key={rows.id}  game={rows} />
      ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
