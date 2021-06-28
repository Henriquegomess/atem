import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Toolbar, InputBase, Switch, Button,   } from "@material-ui/core";

//Import Icons
import SearchIcon from '@material-ui/icons/Search';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#F3F3F3',
        backgroundColor: theme.palette.background.dark,
      },
      appBar: {
        paddingTop: '15px',
        boxShadow: 'none',
        background: '#F3F3F3',
      },
      grow: {
        flexGrow: 1,
      },
      logo: {
        width: 120,
      },
      search: {
        position: 'relative',
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#FFFFFF',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
      },
      inputRoot: {
        color: '#000000',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
}));

function Topbar(darkMode, setDarkMode) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
            <AppBar className={classes.appBar}>
        <Toolbar>
          <img className={classes.logo} src='/images/atem_logo.png' alt='logo'/>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Pesquisar"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow}></div>
          {/* <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)}/> */}
          <Button endIcon={<ExpandMore/>} color="primary">2 de abril de 2021</Button>
          <Button endIcon={<ExpandMore/>} color="primary">Filial base Manaus</Button>
          <Button color="primary">Sair</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Topbar;