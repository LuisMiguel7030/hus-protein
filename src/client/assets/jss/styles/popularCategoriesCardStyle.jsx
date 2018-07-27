import { primaryColor, secundaryColor } from '../Style.jsx';

const popularCategoriesCardStyle = theme => ({
    container: {
        width: '1100px',
        "&  div > div":{
            [theme.breakpoints.up("xs")]: {
                height: 100,
            },
            [theme.breakpoints.up("sm")]: {
                height: 200,
            },
            [theme.breakpoints.up("md")]: {
                height: 250,
            },
        },
        "& div:first-child > div": {
            backgroundColor: secundaryColor,
        },
        "& div:nth-child(2) > div": {
            backgroundColor: primaryColor,
        },
        "& div:nth-child(3) > div": {
            backgroundColor: primaryColor,
        },
        "& div:last-child > div": {
            backgroundColor: secundaryColor,
        }
    },
});

export default popularCategoriesCardStyle