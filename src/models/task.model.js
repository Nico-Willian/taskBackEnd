import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    checkbox:{
        type: Boolean,
        default: false,
    },
});

const TaskModel = mongoose.model("Tarefa", taskSchema);
export default TaskModel;
  