import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getOptimizedImageUrl from "../services/image-url";
import LoadingSkeletonSideBar from "./LoadingSkeletonSideBar";
import useGameQueryStore from "../stores/store";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6];
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

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
        {data?.results.map((rows) => (
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
                onClick={() => setGenreId(rows.id)}
                fontWeight={rows.id === gameQuery.genreId ? "bold" : "normal"}
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
