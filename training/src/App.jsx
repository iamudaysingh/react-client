import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import theme from './themeSetUpDemo/theme';
// import ChildrenDemo from './pages/ChildrenDemo/ChildrenDemo';
import Trainee from './pages/Trainee/index';
import NavBar from './pages/components';
// import LogIn from './pages/LogIn/LogIn';

const App = () => (

  <CssBaseline>
    <MuiThemeProvider theme={theme}>
      <Typography>
        <NavBar />
        <Trainee />
      </Typography>
    </MuiThemeProvider>
  </CssBaseline>
);


// const App = () => (<LogIn />);
export default App;
