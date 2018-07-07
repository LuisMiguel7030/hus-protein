import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import productCardStyel from '../../assets/jss/styles/productCardStyel.jsx';
import proteina from '../../assets/img/proteina.png';
import classNames from 'classnames';
import { AddShoppingCart, FavoriteBorder } from '@material-ui/icons';
import { 
    Card, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Typography, 
    IconButton,
    Paper } from '@material-ui/core';

class ProductCard extends Component {



    render() {
      const { classes, name, provider, price } = this.props;
    return (
      <div>
        <Card className={classes.card}>
            <CardMedia 
              component='img'
              image={proteina}
              title='Imagen de la proteina'/>  
            <CardContent>
                <Paper className={classes.news} color='secondary'>
                    <Typography  component="span">
                        20% DE DESCUENTO
                    </Typography>
                </Paper>
                <Typography className={classes.title} variant="headline" component="h2">
                    {name}
                </Typography>
                <Typography className={classes.subtitle} color="textSecondary">
                    {provider}
                </Typography>
                
            </CardContent>
            <CardActions className={classes.action}>
                <Typography className={classes.price}  color='secondary' variant='title' component="p">
                   ${price.toLocaleString()}
                </Typography>
                <div className={classes.actionContainer}>
                    <IconButton color="default" className={classes.button}>
                        <AddShoppingCart className={classNames(classes.rightIcon, classes.iconSmall)}/>
                    </IconButton>
                    <IconButton color="default" className={classes.button}>
                        <FavoriteBorder className={classNames(classes.rightIcon, classes.iconSmall)}/>
                    </IconButton>
                </div>  
            </CardActions>
        </Card>
      </div>
    )
  }
};

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};


export default withStyles(productCardStyel)(ProductCard);