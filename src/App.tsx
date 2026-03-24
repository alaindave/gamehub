import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav"
                      "aside main"`}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" paddingLeft="10px">
        <GenreList />
      </GridItem>
      <GridItem area="main" paddingLeft="10px">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
