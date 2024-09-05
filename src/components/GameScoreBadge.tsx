import { Badge } from "@chakra-ui/react";
import React from "react";

interface GameScoreBadgeProps {
  score: number;
}

const GameScoreBadge = ({ score }: GameScoreBadgeProps) => {
  let badgeColor = score > 75 ? "green" : score > 60 ? "yellow" :"";
  return (
    <Badge colorScheme={badgeColor} p={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default GameScoreBadge;
