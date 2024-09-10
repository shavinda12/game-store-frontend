import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <Text>{error.message}</Text>;
  return (
    <InfiniteScroll //this is infinite scroll.this will allow us to scroll infinetly
      dataLength={fetchedGamesCount} //this property to store no:of games fetched so far
      hasMore={!!hasNextPage} //has more is boolean or undefined.if the value undefined !! will convert to false
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
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
    </InfiniteScroll>
  );
};

export default GamesGrid;
