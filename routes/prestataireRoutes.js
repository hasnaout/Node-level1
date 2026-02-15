const express = require('express');
const router = express.Router();
const {
    createPrestataire,
} = require('../controllers/prestataireController');    
router.post('/', createPrestataire);
module.exports = router;