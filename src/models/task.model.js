import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true,
    },
    descricao:{
        type: String,
    },
    checkbox:{
        type: Boolean,
    },
});

const TarefaModel = mongoose.model("Tarefa", userSchema);
export default TarefaModel;
  