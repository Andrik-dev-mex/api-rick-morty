import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function Table({id, name, air_date, episode}) {
  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="rigth">{name}</TableCell>
      <TableCell align="rigth">{air_date}</TableCell>
      <TableCell align="rigth">{episode}</TableCell>
    </TableRow>
  );
};
