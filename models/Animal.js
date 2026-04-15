const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    raça: { type: String, required: true, trim: true },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Animal', AnimalSchema);