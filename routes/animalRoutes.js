const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

router.get('/', animalController.listEntries);
router.get('/:id', animalController.getEntryById);
router.post('/', animalController.createEntry);
router.put('/:id', animalController.updateEntry);
router.delete('/:id', animalController.deleteEntry);

module.exports = router;