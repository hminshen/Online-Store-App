import UserRouter from './routes/user';
import AuthRouter from './routes/auth';
import ItemRouter from './routes/item';

import express from 'express';
import config from './config/endpoints.config';
import corsOptions from './config/cors-config';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from './auth/passport/passport-config';
import session from 'express-session';

const app = express();
const port = config.PORT;

// Middleware parsers to parse incoming JSON data -- if not cannot parse req obj:
app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// Passport Authentication Session setup
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

// Enable Cors
app.use(
  cors(corsOptions)
);

// List of different routes available on the backend:
app.use('/', AuthRouter);
app.use('/users', UserRouter);
app.use('/items', ItemRouter);

// Start server on the particular port:
app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})