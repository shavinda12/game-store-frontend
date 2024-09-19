import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const isRouterError = useRouteError();
  return (
    <>
      <NavBar />
      <Box mx={5}>
        <Heading>Ooops.....</Heading>
        <Text my={3}>
          {isRouterError ? "Invalid Page.." : "Something went wrong.."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
