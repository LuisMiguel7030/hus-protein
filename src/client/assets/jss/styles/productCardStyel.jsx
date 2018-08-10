import { primaryColor, secundaryColor } from '../Style.jsx';

const productCardStyel = theme => ({
    news: {
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: secundaryColor,
        '& > span': {
            color: primaryColor,
            padding: '5px 0',
            fontWeight: '600'
        }
    },
    card: {
       maxWidth: 240,
       maxHeight: 443,
    },
    title: {
        fontSize: 18,
       fontWeight: '600',
    },
    subtitle: {
        marginBottom: 12,
    },
    price: {
        marginLeft: theme.spacing.unit,
        fontWeight: '600',
    },
    actionContainer: {
        justifyContent: 'center',
    },
    action: {
        justifyContent: 'space-between',
        borderTop: '1px #eee solid'
    },
    button: {
    },
    
});

export default productCardStyel;