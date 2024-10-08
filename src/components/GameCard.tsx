import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Games } from "../entities/Games";
import PlatFormIconList from "./PlatFormIconList";
import GameScoreBadge from "./GameScoreBadge";
import getOptimizedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Games;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getOptimizedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatFormIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <GameScoreBadge score={game.metacritic} />
        </HStack>
        <Heading>
          <Link to={`games/:${game.slug}`}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
