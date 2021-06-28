import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaginationBasic from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: '-40px',
      marginLeft: '20px',
    },
    background: '#F3F3F3',
  },
}));

function Pagination() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PaginationBasic count={10} color="primary" />
    </div>
  );
}
export default Pagination;