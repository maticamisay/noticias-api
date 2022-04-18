import React from "react";
import { Typography } from "@mui/material";
import styles from '../styles/header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Typography align="center" paddingY={1} component="h1" variant="h3">
        Buscador de Noticias
      </Typography>
    </header>
  );
};

export default Header;
