import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav"
                      "aside main"`}

      // templateAreas={{
      //   base: `"nav" "main"`,
      //   lg: `"nav nav" "aside main"`,
      // }}
      // templateColumns={{
      //   base: "1fr",
      //   lg: "200px 1fr",
      // }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" paddingX="10px">
        <GenreList />
      </GridItem>

      <GridItem area="main" paddingLeft="10px">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
