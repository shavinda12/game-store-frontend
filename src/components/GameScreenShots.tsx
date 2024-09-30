import React from "react";
import useGameScreenShots from "../hooks/useGameScreenShots";
import { Image, SimpleGrid } from "@chakra-ui/react";
import { Md10K } from "react-icons/md";

interface GameScreenShotsProps {
  gameId?: number;
}

const GameScreenShots = ({ gameId }: GameScreenShotsProps) => {
  const { data } = useGameScreenShots(gameId!)
  console.log(data?.results);
  return (
    <>
      <SimpleGrid columns={{base:1,md:2}} spacing={2}>
        {data?.results.map((file) => (
          <Image key={file.id} src={file.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenShots;
