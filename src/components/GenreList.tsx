import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getOptimizedImageUrl from "../services/image-url";
import LoadingSkeletonSideBar from "./LoadingSkeletonSideBar";

interface GenreListProps {
  onSelect: (genres: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({ onSelect, selectedGenre }: GenreListProps) => {
  const { data, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Heading as="h1" size="2xl" my={4}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeleton.map((item) => (
            <div key={item}>
              <LoadingSkeletonSideBar />
            </div>
          ))}
        {data.map((rows) => (
          <ListItem key={rows.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                src={getOptimizedImageUrl(rows.image_background)}
              />
              <Button
                whiteSpace="wrap"
                textAlign="left"
                variant="link"
                onClick={() => onSelect(rows)}
                fontWeight={rows.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {rows.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
