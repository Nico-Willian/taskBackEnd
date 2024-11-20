import mongoose from 'mongoose';
import TaskModel from "../models/task.model.js";
export class TaskService {
    async createTask({ title, description }) {
    
        if (!title) {
          throw new Error('O campo titulo é obrigatório.');
        }
    
        try {
            const newTask = new TaskModel({
              title,
              description,
            });

            return await newTask.save();

        } catch (error) {
          console.error('Erro ao criar task:', error);
          throw new Error('Erro ao criar task');
        }
    }

    async getAllTasks() {
        try {
            return await TaskModel.find({});
        } catch (error) {
            console.error('Erro ao buscar tasks:', error);
            throw new Error('Erro ao buscar tasks');
        }
    }

    async updateTask(id, { title, description }) {
        try {
            return await TaskModel.findByIdAndUpdate(id, { title, description }, { new: true });
        } catch (error) {
            console.error('Erro ao atualizar task:', error);
            throw new Error('Erro ao atualizar task');
        }
    }

    async updateTaskStatus(id, checked) {
        try {
            const updatedTask = await TaskModel.findByIdAndUpdate(
                id,
                { checkbox: checked },
                { new: true }
            );
            return updatedTask;
        } catch (error) {
            console.error('Erro ao atualizar status da task:', error);
            throw new Error('Erro ao atualizar status da task');
        }
    }

    async deleteTask(id) {
        try {
            const deletedTask = await TaskModel.findByIdAndDelete(id);
            if (!deletedTask) {
                throw new Error('Tarefa não encontrada');
            }
        return deletedTask;
        } catch (error) {
            console.error('Erro ao excluir task:', error);
            throw new Error('Erro ao excluir task');
        }
    }
}