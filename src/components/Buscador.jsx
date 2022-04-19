import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import useNoticias from "../hooks/useNoticias";

const Buscador = () => {
  const [buscador, setBuscador] = useState("");
  const { handleChangeBusqueda } = useNoticias();
  const handleChangeBuscador = (e) => {
    setBuscador(e.target.value);
    // e.target.value='hola'
  };
  const realizarBusqueda = () =>{
    handleChangeBusqueda(buscador)
    
  }
  return (
    <>
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
            onChange={handleChangeBuscador}
            // value='busqueda'
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{ padding: "14px 14px" }}
            onClick={()=>handleChangeBusqueda(buscador)}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Buscador;
