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
import TableData from "./TableData";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(5),
    },
  },
}));

const Episodes = (props) => {
  const classes = useStyles();
  const { id } = props.match.params;
  const [epi, setEpi] = useState({ episodes: [] });
  const [urlEpisodes, setUrlEpisodes] = useState([]);
  let { episodes } = epi;

  useEffect(() => {
    const getUrls = (id) => {
      AxiosClient.get(`/character/${id}`).then((res) => {
        setUrlEpisodes(res.data.episode);
      });
    };

    getUrls(id);
  }, [id]);

  useEffect(() => {
    const getEpisodes = async (url) => {
      const response = await axios.get(url);
      episodes.push(response.data);

      setEpi({ episodes: episodes });
    };

    urlEpisodes.forEach((url) => {
      getEpisodes(url);
    });
  }, [episodes, urlEpisodes]);

  console.log(epi.episodes);

  const renderData = () => {
    return (
      <TableBody>
        {epi.episodes.map((episode) => (
          <TableData
            name={episode.name}
            air_date={episode.air_date}
            id={episode.id}
            episode={episode.episode}
          />
        ))}
      </TableBody>
    );
  };

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="rigth">#</TableCell>
              <TableCell align="rigth">Name</TableCell>
              <TableCell align="rigth">Air Date</TableCell>
              <TableCell align="rigth">Episode</TableCell>
            </TableRow>
          </TableHead>
          {renderData()}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Episodes;
