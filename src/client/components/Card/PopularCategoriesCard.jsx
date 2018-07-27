import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from "@material-ui/core";
import popularCategoriesCardStyle from '../../assets/jss/styles/popularCategoriesCardStyle.jsx';


const PopularCategoriesCard = ({ classes }) => (
    <Grid className={classes.container} container spacing={16} >
        <Grid item xs={6} sm={8} >
        <Paper>hello</Paper>
        </Grid>
        <Grid item xs={6} sm={4} >
        <Paper>hello</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
        <Paper>hello</Paper>
        </Grid>
        <Grid item xs={6} sm={8}>
        <Paper>hello</Paper>
        </Grid>
    </Grid>
);

PopularCategoriesCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(popularCategoriesCardStyle)(PopularCategoriesCard);