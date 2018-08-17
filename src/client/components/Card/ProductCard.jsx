import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import productCardStyle from '../../assets/jss/styles/productCardStyle.jsx';
import LabelProduct from '../Label/LabelProductStatus.jsx';
import classNames from 'classnames';
import { AddShoppingCart, FavoriteBorder } from '@material-ui/icons';
import { 
    Card, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Typography, 
    IconButton } from '@material-ui/core';

class ProductCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inStock: false,
        };
    };

    componentDidMount() {
        this.validateStatus();
    }

    validateStatus = () => {
        if (this.props.quantity) {
            this.setState({inStock: !this.state.inStock,})
        }
    };

    render() {
        const { classes } = this.props;
        const { inStock } = this.state;
    return (
      <div>
        <Card className={classes.card}>
            <CardMedia 
              component='img'
              src={this.props.image}
              title='Imagen de la proteina'/>  
            <CardContent>

                <LabelProduct
                    inStock={inStock}
                />
                <Typography className={classes.title} variant="headline" component="h2">
                    {this.props.title}
                </Typography>
                <Typography className={classes.subtitle} color="textSecondary">
                    {this.props.brand}
                </Typography>
                
            </CardContent>

            <CardActions className={classes.action}>
                <Typography className={classes.price}  color='secondary' variant='title' component="p">
                   ${this.props.price.toLocaleString()}
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
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};


export default withStyles(productCardStyle)(ProductCard);