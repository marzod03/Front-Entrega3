const { Products } = require('../database/db');

// Crear producto
const createProduct = async (req, res) => {
    try {
        const { name, price, description, technical_description, sat_key, data_sheet, category_id } = req.body;
        const product = await Products.create({ name, price, description, technical_description, sat_key, data_sheet, category_id });
        res.status(201).send({
            status: "correcto",
            message: "Creado correctamente",
            data: product
        });
    } catch (error) {
        res.status(503).send({
            status: "hay un problema",
            message: error.message
        });
    }
};

// Leer todos los productos
const getProducts = async (req, res) => {
    try {
        const products = await Products.findAll();
        res.status(200).send(products);
    } catch (error) {
        res.status(503).send({
            status: "hay un problema",
            message: error.message
        });
    }
};

// Leer un producto por ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findByPk(id);
        if (!product) {
            return res.status(404).send({
                status: "no encontrado",
                message: `No se encontró el producto con ID ${id}`
            });
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(503).send({
            status: "hay un problema",
            message: error.message
        });
    }
};

// Actualizar producto
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description, technical_description, sat_key, data_sheet, category_id } = req.body;
        const product = await Products.findByPk(id);

        if (!product) {
            return res.status(404).send({
                status: "no encontrado",
                message: `No se encontró el producto con ID ${id}`
            });
        }

        await product.update({ name, price, description, technical_description, sat_key, data_sheet, category_id });
        res.status(200).send({
            status: "correcto",
            message: "Producto actualizado correctamente",
            data: product
        });
    } catch (error) {
        res.status(503).send({
            status: "hay un problema",
            message: error.message
        });
    }
};

// Eliminar producto
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findByPk(id);

        if (!product) {
            return res.status(404).send({
                status: "no encontrado",
                message: `No se encontró el producto con ID ${id}`
            });
        }

        await product.destroy();
        res.status(200).send({
            status: "correcto",
            message: "Producto eliminado correctamente"
        });
    } catch (error) {
        res.status(503).send({
            status: "hay un problema",
            message: error.message
        });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
