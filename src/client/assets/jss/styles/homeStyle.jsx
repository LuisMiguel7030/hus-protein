import slider from '../../img/slider.jpg';

const homeStyle = theme => ({
    container: {
        marginBottom: 20,
    },
    slider: {
        backgroundImage: `url(${slider})`,
        backgroundPosition: 'center left',
        backgroundSize: 'cover',
        //backgroundColor: '#000',
        minHeight: 250,
        [theme.breakpoints.up("sm")]: {
            minHeight: '360px',
        },
        [theme.breakpoints.up("md")]: {
            minHeight: '400px',
        },
        [theme.breakpoints.up("lg")]: {
            minHeight: '500px',
        },
    },
    slider2: {
        //backgroundImage: `url(${slider})`,
        //backgroundPosition: 'center left',
        //backgroundSize: 'cover',
        backgroundColor: '#eee',
        minHeight: 150,
        [theme.breakpoints.up("sm")]: {
            minHeight: '180px',
        },
        [theme.breakpoints.up("md")]: {
            minHeight: '200px',
        },
        [theme.breakpoints.up("lg")]: {
            minHeight: '250px',
        },
    },
    
});
export default homeStyle;