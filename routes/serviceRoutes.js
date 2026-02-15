const express = require('express');
const router = express.Router();
const {
    createDemandeService,
} = require('../controllers/demandeserviceController');    
router.post('/', createDemandeService);
module.exports = router;