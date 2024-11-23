const express = require('express');
const router = express.Router();
const guidesControllers = require('../controllers/guides.controller');
const config = require('../middleware/multerConfig')
router.use(express.json())

// Rutas CRUD
//GET de todos y POST
router.route('/')
    .get(guidesControllers.getTodasGuias)
    .post(config.single('guide_pdf'),guidesControllers.crearGuia)
//CRUD donde se requiere el id
router.route('/:id')
    .get(guidesControllers.getGuiaId)
    .delete(guidesControllers.borrarGuia)
    .patch(config.single('guide_pdf'),guidesControllers.actualizarGuia)

module.exports = router;
