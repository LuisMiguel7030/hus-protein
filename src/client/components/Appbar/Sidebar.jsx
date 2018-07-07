import React from 'react';
import PropTypes from 'prop-types';
import {  NavLink } from 'react-router-dom';
import sidebarStyle from '../../assets/jss/styles/sidebarStyle.jsx';
import { withStyles } from '@material-ui/core/styles';
import { 
  Icon,
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden } 
from '@material-ui/core';


class Sidebar extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme, routes } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <List>
          {
            routes.map( (props, key) => {
              return (
                <NavLink
                 to={props.path}
                 activeClassName='active'
                 key={key}>
                  <ListItem button>
                    <ListItemIcon>
                      <props.icon/>
                    </ListItemIcon>
                    <ListItemText primary={props.sidebarName}/>
                  </ListItem>
                </NavLink> 
              );
            })
          }
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <Icon className='material-ui'>menu</Icon>
            </IconButton>
            <Typography variant="title" color="secondary" noWrap>
              Hus Protein
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <div className={classes.toolbar} />
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(sidebarStyle, { withTheme: true })(Sidebar);


