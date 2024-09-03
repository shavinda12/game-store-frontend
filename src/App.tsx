import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <Grid templateAreas={{
      base:`"nav main"`,
      lg:`"nav nav" "aside main"`
    }}>
      <GridItem area="nav" bg="blue"> Nav </GridItem>
      <Show above='lg'>
      <GridItem area="aside" bg="red"> Aside </GridItem>
      </Show>
      
      <GridItem area="main" bg="green"> main </GridItem>
    </Grid>
  );
};

export default App;
