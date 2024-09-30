import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionList from "../components/DefinitionList";
import GameTrailor from "../components/GameTrailor";
import GameScreenShots from "../components/GameScreenShots";

const GameDetailsPage = () => {
  const { slug } = useParams(); //getting the slug parameter using the routes
  const { data, isLoading, error } = useGameDetails(slug?.slice(1)); //in here we get slug as :gta-5.to remove : we use slice
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{data?.name}</Heading>
        <ExpandableText>{data?.description_raw}</ExpandableText>
        <DefinitionList data={data} />
      </GridItem>
      <GridItem>
        <GameTrailor gameId={data?.id} />
        <GameScreenShots gameId={data?.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
