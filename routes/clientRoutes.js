const express = require('express');
const router = express.Router();
const {
    createClient,
    getAllClients,
    getClientById,
    updateClientById,
    deleteClientById,
} = require('../controllers/clientController');

router.get('/', getAllClients);
router.post('/', createClient);
router.get('/:id', getClientById);
router.put('/:id', updateClientById);
router.delete('/:id', deleteClientById);

module.exports = router;