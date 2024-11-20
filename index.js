import  './src/database/connect.js';
import './src/controllers/taskControllers.js';
import taskRouter from './src/routes/taskRoutes.js';
import cors from 'cors';
import express from 'express';


const app = express();
app.use(cors());
app.use(express.json());

app.use('/tasks', taskRouter);

const port = 8080;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});