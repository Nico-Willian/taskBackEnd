import  './src/database/connect.js';
import './src/controllers/taskControllers.js';
import express from 'express';


const app = express();
app.use(express.json());

const port = 8080;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});