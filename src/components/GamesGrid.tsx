import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface GamesGridProps {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: GamesGridProps) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery); //in here useGame function is called
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={7}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <LoadingSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((page) => (
              <GameCard key={page.id} game={page} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && <Button onClick={()=>fetchNextPage()} my={4}>{isFetchingNextPage?'Loading...':'Load More'}</Button>}
    </>
  );
};

export default GamesGrid;
