import React from "react";

//Import Material UI
import { makeStyles, Toolbar, Box, Grid } from "@material-ui/core";

//Import Styles Material UI
// import { useTheme } from '@material-ui/core/styles';

//Import Components
import Pagination from '../Components/Pagination'
import Tables from '../Components/Tables'
import Topbar from "../Components/Topbar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: '#F3F3F3',
    backgroundColor: theme.palette.background.dark,
  },
  h3: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'normal',
  },
  h2: {
    textAlign: 'center',
  },
  retangulo: {
    paddingBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

function Home(darkMode, setDarkMode) {
  const classes = useStyles();
//   const theme = useTheme();

  return (
    <div className={classes.root}>
      <Topbar/>
      <Toolbar/>
      <h3 className={classes.h3}>Resultados encontrados</h3>
      <Box m={2} display='flex' overflow-y="scroll">
        <Grid container m={3} spacing={2}>
        <Grid item xs={2.5} spacing={2}>
                <h2 className={classes.h2}>Não programados</h2>
                {/* <img className={classes.retangulo} src='/images/retangulo.png' alt='logo' width="120px"/> */}
                <Tables/>
            </Grid>
            <Grid item xs={2.5} spacing={2}>
                <h2 className={classes.h2}>Programados</h2>
                <Tables/>
            </Grid>
            <Grid item xs={2.5} spacing={2}>
                <h2 className={classes.h2}>Em faturamento(na base)</h2>
                <Tables/>
            </Grid>
            {/* <Grid item xs={2.5} spacing={2}>
                <h2 className={classes.h2}>Em carregamento</h2>
                <Tables/>
            </Grid>
            <Grid item xs={2.5} spacing={2}>
                <h2 className={classes.h2}>Carregados</h2>
                <Tables/>
            </Grid> */}
        </Grid>
      </Box>
      <Toolbar/>
      <Pagination/>
    </div>
  );
}

export default Home;
