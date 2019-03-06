import React from 'react';
import {
  BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
import theme from './themeSetUpDemo/theme';
import ChildrenDemo from './pages/ChildrenDemo/ChildrenDemo';
import LogIn from './pages/LogIn/LogIn';
import Trainee from './pages/Trainee/Trainee';
import TextFieldDemo from './pages/TextFieldDemo';
import InputDemo from './pages/InputDemo';
import { AuthRoute, PrivateRoute } from './Routes';
import NoMatch from './pages/NoMatch/NoMatch';

const App = () => (

  <CssBaseline>
    <MuiThemeProvider theme={theme}>
      <Typography>
        <Router>
          <Switch>
            <AuthRoute exact path="/login" component={LogIn} />
            <PrivateRoute exact path="/inputdemo" component={InputDemo} />
            <PrivateRoute exact path="/textfielddemo" component={TextFieldDemo} />
            <PrivateRoute exact path="/" component={Trainee} />
            <PrivateRoute path="/trainee" component={Trainee} />
            <PrivateRoute exact path="/childrendemo" component={ChildrenDemo} />
            <PrivateRoute exactpath="/" component={NoMatch} />
          </Switch>
        </Router>
      </Typography>
    </MuiThemeProvider>
  </CssBaseline>
);

export default App;
