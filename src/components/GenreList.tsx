import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getOptimizedImageUrl from "../services/image-url";
import LoadingSkeletonSideBar from "./LoadingSkeletonSideBar";

interface GenreListProps{
  onSelect:(genres:Genres)=>void
}

const GenreList = ({onSelect}:GenreListProps) => {
  const { data, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <List>
      {isLoading &&
        skeleton.map((item) => (
          <div key={item}>
            <LoadingSkeletonSideBar/>
          </div>
        ))}
      {data.map((rows) => (
        <ListItem key={rows.id} paddingY={2}>
          <HStack>
            <Image
              boxSize="32px"
              src={getOptimizedImageUrl(rows.image_background)}
            />
            <Button variant="link" onClick={()=>onSelect(rows)}>{rows.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
