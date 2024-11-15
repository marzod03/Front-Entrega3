// controllers/quotations.controllers.js

const { Quotations } = require('../database/db');

const createQuotation = async (req, res) => {
  try {
    const newQuotation = await Quotations.create(req.body);
    res.status(201).json(newQuotation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getQuotations = async (req, res) => {
  try {
    const quotations = await Quotations.findAll();
    res.json(quotations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getQuotationById = async (req, res) => {
  try {
    const quotation = await Quotations.findByPk(req.params.id);
    if (quotation) {
      res.json(quotation);
    } else {
      res.status(404).json({ error: 'Cotización no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateQuotation = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Quotations.update(req.body, { where: { id } });
    if (updated) {
      const updatedQuotation = await Quotations.findOne({ where: { id } });
      res.status(200).json(updatedQuotation);
    } else {
      res.status(404).json({ error: 'Cotización no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteQuotation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Quotations.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Cotización no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createQuotation,
  getQuotations,
  getQuotationById,
  updateQuotation,
  deleteQuotation
};
