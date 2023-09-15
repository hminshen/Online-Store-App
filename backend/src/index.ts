import UserRouter from './routes/user'
import express from 'express';

const app = express();
const port = 3002;

// Middleware to parse incoming JSON data -- if not cannot parse req obj:
app.use(express.json());

app.use('/users', UserRouter);

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})