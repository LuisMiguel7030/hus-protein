import express from 'express';
import morgan from 'morgan';
import task from './routes/task.routes.js';
import { mongoose } from './database.js';

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks' ,task);

//Static files
app.use(express.static('public'));

//Starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});