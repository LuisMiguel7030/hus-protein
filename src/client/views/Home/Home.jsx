import React, { Component } from 'react';
import PropTypes from 'prop-types';
import homeStyle from '../../assets/jss/styles/homeStyle.jsx';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import ProductCard from '../../components/Card/ProductCard.jsx';

const products = [
  { name: 'Whey Gold Standard', provider: 'Optimum Nutrition', price: 129900 },
  { name: 'NitroTech', provider: 'MuscleTech', price: 125000 },
  { name: 'Super Mass Gainer', provider: 'Dymatize', price: 129000 },
  { name: 'Whey HD', provider: 'Bpi', price: 135000 },
]

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div> 
        <Grid className={classes.container} container wrap='wrap' spacing={8}>
          
          <Grid item xs={12} sm={8}>
            <Paper className={classes.slider}>
              <img src="" alt=""/>
            </Paper>
          </Grid>
            
          <Grid item xs={12} sm={4}>
            <Grid item xs={12} >
              <Paper className={classes.slider2}></Paper>
            </Grid>
            <Grid item xs={12} >
              <Paper className={classes.slider2}></Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid container wrap='wrap' justify='center' spacing={16}>
          { products.map( (proteins, key) => {
            return (
              <Grid item>
                <ProductCard 
                  key={key}
                  name={proteins.name} 
                  provider={proteins.provider} 
                  price={proteins.price}/>
              </Grid>
            );
          })}
        </Grid>
        

      </div>
    )
  }
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(homeStyle)(Home);