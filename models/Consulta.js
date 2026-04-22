const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema(
  {
    descricao: { type: String, required: true, trim: true },
    data: { type: Date, required: true },
    petId: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Consulta', ConsultaSchema);