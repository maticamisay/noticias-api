import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import useNoticias from "../hooks/useNoticias";

const Buscador = () => {
  const { busqueda, setBusqueda } = useNoticias();
  const handleChangeBuscador = (e) => {
    e.preventDefault();
    setBusqueda(searchText);
    e.target.reset();
  };
  const [searchText, setSearchText] = useState("");
  const handleChangeSearchBar = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleChangeBuscador}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems={"center"}
          spacing={1}
        >
          <Grid item xs>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Ingresa tu búsqueda"
              variant="outlined"
              name="buscando"
              onChange={handleChangeSearchBar}
            />
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              sx={{ padding: "14px 14px" }}
              type="submit"
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Buscador;
