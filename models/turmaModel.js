const mongoose = require('mongoose');

const turmaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  codigo: { type: String, required: true },
  periodo: { type: String, default: '' },
}, { collection: 'Turma' });  

const Turma = mongoose.model('Turma', turmaSchema);
module.exports = Turma;
