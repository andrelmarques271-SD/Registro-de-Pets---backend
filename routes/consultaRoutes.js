const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

router.get('/', consultaController.listEntries);
router.get('/:id', consultaController.getEntryById);
router.post('/', consultaController.createEntry);
router.put('/:id', consultaController.updateEntry);
router.delete('/:id', consultaController.deleteEntry);

module.exports = router;