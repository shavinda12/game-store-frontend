import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Heading,Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionList from "../components/DefinitionList";


const GameDetailsPage = () => {
  const { slug } = useParams(); //getting the slug parameter using the routes
  const { data, isLoading, error } = useGameDetails(slug?.slice(1)); //in here we get slug as :gta-5.to remove : we use slice
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <div>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data?.description_raw}</ExpandableText>
      <DefinitionList data={data}/>
      
    </div>
  );
};

export default GameDetailsPage;
