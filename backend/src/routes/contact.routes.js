const express = require("express");
const router = express.Router()

const {
    getAllContact,
    createContact,
    getContact,
    searchContact
} = require("../controllers/contac.controller")

router.use(express.json())

// Método GET
router.get('/', getAllContact)

// Método GET queries
router.get('/search', searchContact)

// Método GET params
router.get('/:id', getContact)

// Método POST
router.post('/', createContact)

module.exports = router;