import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

//Import Meterial UI
import  { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@material-ui/core';

//Import Icons
import AddCircle from '@material-ui/icons/AddCircle';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    }
  },
});

function createData(cliente, order, product, placa) {
  return {
    cliente,
    order,
    product,
    placa,
    history: [
      { date: '2021-06-25', customerId: '101010', amount: 3 },
      { date: '2021-06-24', customerId: '101010', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment className={classes.margin}>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <AddCircle color="primary"/>}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.cliente}
        </TableCell>
        <TableCell align="right">{row.order}</TableCell>
        <TableCell align="right">{row.product}</TableCell>
        <TableCell align="right">{row.placa}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Detalhes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Cliente</TableCell>
                    <TableCell align="right">QTD</TableCell>
                    <TableCell align="right">Preço (R$)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    order: PropTypes.number.isRequired,
    placa: PropTypes.number.isRequired,
    product: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    cliente: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('Cliente 01', 101010, 'GASC(gasolina)', 'JAX1010'),
  createData('Cliente 01', 101010, 'OB10(diesel S10)', 'JAX1010'),
  createData('Cliente 01', 101010, 'OB10(diesel S10)', 'JAX1010'),
  createData('Cliente 01', 101010, 'OB10(diesel S10)', 'JAX1010'),
  createData('Cliente 01', 101010, 'OB10(diesel S10)', 'JAX1010'),
  createData('Cliente 01', 101010, 'OB10(diesel S10)', 'JAX1010'),
  createData('Cliente 01', 101010, 'OB10(diesel S10)', 'JAX1010'),
  createData('Cliente 01', 101010, 'OB10(diesel S10)', 'JAX1010'),
  createData('Cliente 01', 101010, 'OB10(diesel S10)', 'JAX1010'),
  createData('Cliente 01', 101010, 'OB10(diesel S10)', 'JAX1010'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Cliente</TableCell>
            <TableCell align="right">Ordem</TableCell>
            <TableCell align="right">Produto</TableCell>
            <TableCell align="right">Placa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.cliente} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}