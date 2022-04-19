import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { NoticiasProvider } from "./context/NoticiasProvider";
import Header from "./components/Header";
import Buscador from "./components/Buscador";

function App() {
  return (
    <NoticiasProvider>
      <Header />
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginY={5}
        >
          <Grid item xs={8} md={5} lg={5} sx={{padding:"1rem"}}>
            <Buscador />
          </Grid>
          <Grid item xs={8} md={5} lg={3} sx={{padding:"1rem"}}>
            <Formulario />
          </Grid>
        </Grid>

        <ListadoNoticias />
      </Container>
    </NoticiasProvider>
  );
}

export default App;
