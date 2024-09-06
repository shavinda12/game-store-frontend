import { Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import GameScoreBadge from "./GameScoreBadge";
import getOptimizedImageUrl from "../services/image-url";


interface GameCardProps {
  game: Games;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getOptimizedImageUrl(game.background_image)} />
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
