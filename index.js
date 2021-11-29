import 'dotenv/config.js';
import express from 'express';
import usersRouter from './routes/usersRouter.js';


const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/users', usersRouter);
    

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}   
);