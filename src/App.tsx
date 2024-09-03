import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid templateAreas={{
      base:`"nav main"`,
      lg:`"nav nav" "aside main"`
    }}>
      <GridItem area="nav" bg="blue"> <NavBar/> </GridItem>
      <Show above='lg'>
      <GridItem area="aside" bg="red"> Aside </GridItem>
      </Show>
      
      <GridItem area="main" bg="green"> main </GridItem>
    </Grid>
  );
};

export default App;
