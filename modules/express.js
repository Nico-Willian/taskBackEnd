import express from "express";
import UserModel from "../src/models/task.model.js";

const app = express();
app.use(express.json());

// cria uma nova tarefa
app.post("/index", async (req, res) => {
    try {
      const tarefa = await UserModel.create(req.body);
      res.status(201).json(tarefa); 
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

// pegas todas as tarefas
app.get("/index", async (req, res) => {
    try {
      const tarefas = await UserModel.find({});
      res.status(200).json(tarefas);
    } catch (error) {
      res.status(500).send(error.message);
    }
});

// atualiza uma tarefa
app.patch("/index/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const tarefa = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(tarefa);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  // Apagar uma tarefa
  app.delete("/index/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const tarefa = await UserModel.findByIdAndRemove(id);
      res.status(200).json(tarefa);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  const port = 8080;
  app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));