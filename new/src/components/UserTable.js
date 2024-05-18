import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, Servings, Date, Recipient, protein) {
  return { name, Servings, Date, Recipient, protein };
}

const rows = [
  createData('flan flan', 159, 6.0, 24, 4.0),
  createData('flan flan flan', 237, 9.0, 37, 4.3),
  createData('this that', 262, 16.0, 24, 6.0),
  createData('hehe', 305, 3.7, 67, 4.3),
  createData('lol', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 344 }} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Donation</TableCell>
            <TableCell align="right">Servings</TableCell>
            <TableCell align="right">Listing Date&nbsp;</TableCell>
            <TableCell align="right">Recipient&nbsp;</TableCell>
            <TableCell align="right">Protein&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Servings}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.Recipient}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
