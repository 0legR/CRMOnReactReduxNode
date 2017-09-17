import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import users from './routes/users';
import auth from './routes/auth';

let app = express();

app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/auth', auth);

app.listen(8080, () => console.log('Running on localhost 8080'));