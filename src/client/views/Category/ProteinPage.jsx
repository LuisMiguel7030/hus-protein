import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import proteinPageStyle from '../../assets/jss/styles/proteinPageStyle.jsx';
import PropTypes from 'prop-types';
import { getProteinProducts } from '../../api/product.js';
import ProductCard from '../../components/Card/ProductCard.jsx';


class ProteinPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            status: false
        };
    };

    componentDidMount() {
        getProteinProducts()
            .then( products => {
                this.setState( () => ({
                    products: products.data
                }));
            })
    }

    render() {
        const { products } = this.state;
        const { classes } = this.props;
        return (
            <section className={classes.container}>
                <Grid container wrap='wrap' justify='center' spacing={16}>
                    { products.map( (proteins) => {
                        return (
                            <Grid item key={proteins._id}>
                                <ProductCard
                                    image={proteins.image}
                                    title={proteins.title}
                                    brand={proteins.brand}
                                    price={proteins.pricing.price}
                                    quantity={proteins.quantity}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </section>
        );
    }
}

ProteinPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(proteinPageStyle)(ProteinPage);