import { container } from '../Style.jsx';

const taskStyle = () => ({
    container,
    card: {
        minWidth: 400,
        padding: 30
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    TextField: {
        marginBottom: 15,
    },
    button: {
        color: '#fff'
    }
    
});

export default taskStyle;