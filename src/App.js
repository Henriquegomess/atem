import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Home from './Pages/Home'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary:{
        main: '#D71E05',
      }
    },
    root: {
      background: '#F3F3F3',
    },
    background: {
      default: darkMode ? '#F3F3F3' : '#FFFFFF',
      dark: darkMode ?'#181818' : '#f4f6f8',
      paper: darkMode ? '#F3F3F3' : '#FFFFFF',
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
