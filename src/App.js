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
    marginRight : 20,
    marginLeft: 20,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
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
          {characters.map((character) => {
            return(
              <TarjetaPersonaje
              key = {character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              location = {character.location.name}
              image={character.image}
            />
            )})}
        </Paper>
      </div>
    </div>
  );
}

export default App;
