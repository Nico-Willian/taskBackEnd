import { TaskService } from "../services/taskService.js";

export class TaskController {
    #taskService;
    constructor() {
        this.#taskService = new TaskService();
    }

    async create(req, res) {
        try{
            const {title, description} = req.body;
            const task = await this.#taskService.createTask({title, description});
            res.status(200).json(task);
        }catch(error){
            res.status(500).send(error.message);
        }
    }

    async getAllTasks(req, res) {
        try {
          const tasks = await this.#taskService.getAllTasks();
          res.status(200).json(tasks);
        } catch (error) {
          res.status(500).json(error.message);
        }
    }

    async updateTask(req, res) {
        try {
          const id = req.params.id;
          const { title, description } = req.body;
          const task = await this.#taskService.updateTask(id, { title, description });
          res.status(200).json(task);
        } catch (error) {
          res.status(500).json(error.message);
        }
    }

    async updateTaskStatus(req, res) {
        try {
          const { id } = req.params;
          const { checked } = req.body;
          const task = await this.#taskService.updateTaskStatus(id, checked);
          res.status(200).json(task);
        } catch (error) {
          res.status(500).json(error.message);
        }
    }

    async deleteTask(req, res) {
        try {
          const { id } = req.params;
          await this.#taskService.deleteTask(id);
          res.status(200).json({message: 'tarefa exlcuida com sucesso'});
        } catch (error) {
          res.status(500).json(error.message);
        }
    }
}
