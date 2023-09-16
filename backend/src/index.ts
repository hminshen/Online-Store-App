import UserRouter from './routes/user';
import AuthRouter from './routes/auth';
import express from 'express';
import config from './config/endpoints.config';
import corsOptions from './config/cors-config';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = config.PORT;

// Middleware to parse incoming JSON data -- if not cannot parse req obj:
app.use(express.json());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(
  cors(corsOptions)
);
app.use('/', AuthRouter);
app.use('/users', UserRouter);

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})