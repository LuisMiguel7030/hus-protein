import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';
import { blueGrey, lightGreen } from '@material-ui/core/colors';
import appStyle from './assets/jss/styles/appStyle.jsx';
import Sidebar from './components/Appbar/Sidebar.jsx';
import menuRoutes from './routes/menu.jsx';
import Footer from './components/Footer/Footer.jsx';


const muiTheme = createMuiTheme({
  palette: {
    primary: { main: '#282828' },
    secondary: { main: lightGreen['A700']}
  }
});

const switchRouters = (
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
      <BrowserRouter>
        
          <MuiThemeProvider theme={muiTheme}>
              <Sidebar routes={menuRoutes} />
              <div className={classes.wrapper}>
                <div className={classes.mainPanel}>
                  <div className={classes.content}>
                    <div className={classes.toolbar} />
                    {switchRouters}
                  </div>
                  <Footer />
                </div>
              </div> 
          </MuiThemeProvider>
        
      </BrowserRouter>    
    )
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(appStyle)(App);
