import React, { useEffect, useState } from "react";
import AppBar from "./layout/AppBar";
import TarjetaPersonaje from "./components/TarjetaPersonaje";
import { Paper } from "@material-ui/core";
import AxiosClient from "./config/axiosClient";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop : 10,
    marginRight : 40,
    marginLeft: 40,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function App(props) {
  const classes = useStyles();

  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    AxiosClient.get("/character/").then((res) => {
      setCharacters(res.data.results);
    });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <AppBar />
      <div className={classes.root}>
        <Paper elevation={0} className = {classes.root}>
          {characters.map((character, index) => {
            return(
              <TarjetaPersonaje
              key = {index}
              index = {character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              image={character.image}
            />) })}
        </Paper>
      </div>
    </div>
  );
}

export default App;
