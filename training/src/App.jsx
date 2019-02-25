import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import theme from './themeSetUpDemo/theme';
import ChildrenDemo from './pages/ChildrenDemo/ChildrenDemo';

// const App = () => (<InputDemo />);
const App = () => (
  <MuiThemeProvider theme={theme}>
    <Typography>
      <ChildrenDemo />
    </Typography>
  </MuiThemeProvider>
);
export default App;
