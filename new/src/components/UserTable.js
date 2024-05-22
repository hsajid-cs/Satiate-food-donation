import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DenseTable({ data }) {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 344 }} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Donation</TableCell>
            <TableCell align="right">Serving</TableCell>
            <TableCell align="right">Listing Date&nbsp;</TableCell>
            <TableCell align="right">Recipient&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.food_type}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.expiry_date}
              </TableCell>
              {/* <TableCell align="right">{data.donation_id}</TableCell> */}
              <TableCell align="right">{formatDate(data.quantity)}</TableCell>
              <TableCell align="right">{data.recipient}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
