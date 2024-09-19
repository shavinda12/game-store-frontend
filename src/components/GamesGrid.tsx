import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";




const GamesGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(); //in here useGame function is called
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
              <Box _hover={{transform:'scale(1.03)',transition:'transform .15s ease-in'}}>
                <GameCard key={page.id} game={page}/>
              </Box>
              
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GamesGrid;
