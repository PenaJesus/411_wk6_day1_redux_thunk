import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

const Import = (props) => {
  console.log(props)
  // fill out this component
  

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={() => props.fetchMakes()}>
        Import
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make, index) => (
            <TableRow key={index}>
              <TableCell>{make.MakeId}</TableCell>
              <TableCell >{make.MakeName}</TableCell>
              <TableCell >
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

     

    </Container>
  );
};

export default Import;
