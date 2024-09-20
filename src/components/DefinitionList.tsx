import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import { Games } from "../entities/Games";
import GameScoreBadge from "./GameScoreBadge";

interface DefinitionListProps{
    data?:Games
}

const DefinitionList = ({data}:DefinitionListProps) => {
  return (
    <SimpleGrid as="dl" columns={2} my={5}>
      <DefinitionItem term="Platforms">
        {data?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="MetaScore">
        <GameScoreBadge score={data?.metacritic!} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {data?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publisher">
        {data?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default DefinitionList;
