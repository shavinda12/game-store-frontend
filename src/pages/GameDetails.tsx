import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();//getting the slug parameter using the routes
  const { data, isLoading, error } = useGameDetails(slug?.slice(1)); //in here we get slug as :gta-5.to remove : we use slice

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <div>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </div>
  );
};

export default GameDetailsPage;
