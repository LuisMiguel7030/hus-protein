import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';
import { blueGrey, lightGreen } from '@material-ui/core/colors';
import appStyle from './assets/jss/styles/appStyle.jsx';
import Sidebar from './components/Appbar/Sidebar.jsx';
import menuRoutes from './routes/menu.jsx';


const muiTheme = createMuiTheme({
  palette: {
    primary: { main: '#282828' },
    secondary: { main: lightGreen['A700']}
  }
});

const switchRoters = (
      menuRoutes.map( (props, key) => {
        return (
          <Route path={props.path} exact={props.exact} component={props.component} key={key}/>
        );
      })
);

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        
          <MuiThemeProvider theme={muiTheme}>
              <Sidebar routes={menuRoutes} />
              <div className={classes.wrapper}>
              <div className={classes.mainPanel}>
                <div className={classes.content}>
                  <div className={classes.toolbar} />
                  {switchRoters}
                </div>
              </div>
              </div> 
          </MuiThemeProvider>
        
      </Router>    
    )
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(appStyle)(App);
