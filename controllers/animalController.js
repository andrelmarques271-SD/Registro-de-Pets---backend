const Animal = require('../models/Animal');

exports.listEntries = async (req, res) => {
  const entries = await Animal.find();
  res.json(entries);
};

exports.getEntryById = async (req, res) => {
  const entry = await Animal.findById(req.params.id);
  if (!entry) return res.status(404).json({ message: 'Registro não encontrado.' });
  res.json(entry);
};

exports.createEntry = async (req, res) => {
  const entry = await Animal.create(req.body);
  res.status(201).json(entry);
};

exports.updateEntry = async (req, res) => {
  const entry = await Animal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!entry) return res.status(404).json({ message: 'Registro não encontrado.' });

  res.json(entry);
};

exports.deleteEntry = async (req, res) => {
  const entry = await Animal.findByIdAndDelete(req.params.id);
  if (!entry) return res.status(404).json({ message: 'Registro não encontrado.' });
  res.json({ message: 'Registro removido com sucesso.' });
};