import { Router } from 'express';
import { TaskController } from '../controllers/taskControllers.js';

const taskRouter = Router();
const taskController = new TaskController();

taskRouter.post('/', (req, res) => taskController.create(req, res));
taskRouter.get('/', (req, res) => taskController.getAllTasks(req, res));
taskRouter.put('/:id', (req, res) => taskController.updateTask(req, res));
taskRouter.patch('/:id/status', (req, res) => taskController.updateTaskStatus(req, res));
taskRouter.delete('/:id', (req, res) => taskController.deleteTask(req, res));

export default taskRouter;