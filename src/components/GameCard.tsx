import { Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import GameScoreBadge from "./GameScoreBadge";


interface GameCardProps {
  game: Games;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent="space-between">
        <PlatFormIconList platform={game.parent_platforms.map((p)=>(p.platform))}/>
        <GameScoreBadge score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
