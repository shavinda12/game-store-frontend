import { Box, HStack, Skeleton } from "@chakra-ui/react";

const LoadingSkeletonSideBar = () => {
  return (
    <Box>
      <HStack paddingX={1} paddingY={1}>
        <Skeleton height="32px" width="30%"/>
        <Skeleton height="32px" width="40%"/>
      </HStack>
    </Box>
  );
};

export default LoadingSkeletonSideBar;
