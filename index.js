import  './src/database/connect.js';
import './src/controllers/taskControllers.js';
import app from 'express';

app.use(express.json());
const port = 8080;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});