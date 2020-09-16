import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AxiosClient from "../config/axiosClient";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Episodes = (props) => {
  const classes = useStyles();
  const {id} = props.match.params;
  const [characterEpisodes, setCharacterEpisodes] = useState({episodes: []});
  const [urlEpisodes, setUrlEpisodes] = useState([]);
  
  let {episodes} = characterEpisodes;

  useEffect(() => {
    const getUrls = (id) => {
      AxiosClient.get(`/character/${id}`)
      .then(res => {
        setUrlEpisodes(res.data.episode);
      })
    };

    getUrls(id);
  },[id]);

  useEffect(() => {
    
    const getEpisodes = () => { 
      urlEpisodes.forEach(url => { 
        axios.get(url)
        .then(res => {episodes.push(res.data)});
      });
      
    };
    setCharacterEpisodes({episodes:episodes});
    getEpisodes();
    
  }, [urlEpisodes, episodes]);

  console.log(characterEpisodes);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Air Date</TableCell>
            <TableCell align="right">Episode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {characterEpisodes.episodes.map((episode) => {
          return(
            <TableRow key={episode.id}>
              <TableCell component="th" scope="row">
                {episode.id}
              </TableCell>
              <TableCell align="right">{episode.name}</TableCell>
              <TableCell align="right">{episode.air_date}</TableCell>
              <TableCell align="right">{episode.episode}</TableCell>
            </TableRow>
          )
        })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Episodes;
