import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";

interface GameCardProps {
  game: Games;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <PlatFormIconList platform={game.parent_platforms.map((p)=>(p.platform))}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
