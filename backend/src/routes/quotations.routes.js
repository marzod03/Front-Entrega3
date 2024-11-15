const express = require('express');
const router = express.Router();
const quotationsController = require('../controllers/quotations.controllers');

router.post('/', quotationsController.createQuotation);
router.get('/', quotationsController.getQuotations);
router.get('/:id', quotationsController.getQuotationById);
router.put('/:id', quotationsController.updateQuotation);
router.delete('/:id', quotationsController.deleteQuotation);

module.exports = router;
