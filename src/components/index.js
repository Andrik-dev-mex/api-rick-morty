import React, { useEffect, useState } from "react";
import TarjetaPersonaje from "./TarjetaPersonaje";
import { Paper } from "@material-ui/core";
import AxiosClient from "../config/axiosClient";
import { Button } from "@material-ui/core";
import { animateScroll as scroll } from "react-scroll";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 10,
    marginRight: 20,
    marginLeft: 20,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function App(props) {
  const classes = useStyles();

  const [characters, setCharacters] = useState([]);
  const [totalCharacters, setTotalCharacters] = useState({num: Number}) 
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getCharacters = () => {
      AxiosClient.get(`/character/?page=${page}`).then((res) => {
        setCharacters(res.data.results);
        setTotalCharacters({num : res.data.info.count})
      });
    };

    getCharacters();
  }, [page]);

  return (
    <div>
      <div className={classes.root}>
      <Typography variant = "h6">Total Characters: {totalCharacters.num}</Typography>
        <Paper elevation={0} className={classes.root}>
          {characters.map((character) => {
            return (
              <TarjetaPersonaje
                key={character.id}
                id={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                location={character.location.name}
                image={character.image}
              />
            );
          })}
        </Paper>
        <Typography variant="h5">Page:</Typography>

        <Button
          onClick={() => {
            scroll.scrollToTop();
            setPage(1);
          }}
          variant = "outlined"
          color = "primary"
        >
          One
        </Button>
        <Button
          onClick={() => {
            scroll.scrollToTop();
            setPage(2);
          }}
          variant = "outlined"
          color = "primary"
        >
          Two
        </Button>
        <Button
          onClick={() => {
            scroll.scrollToTop();
            setPage(3);
          }}
          variant = "outlined"
          color = "primary"
        >
          Three
        </Button>
        <Button
          onClick={() => {
            scroll.scrollToTop();
            setPage(4);
          }}
          variant = "outlined"
          color = "primary"
        >
          Four
        </Button>
        <Button
          onClick={() => {
            scroll.scrollToTop();
            setPage(5);
          }}
          variant = "outlined"
          color = "primary"
        >
          Five
        </Button>
        <Button
          onClick={() => {
            scroll.scrollToTop();
            setPage(6);
          }}
          variant = "outlined"
          color = "primary"
        >
          Six
        </Button>
      </div>
    </div>
  );
}

export default App;
