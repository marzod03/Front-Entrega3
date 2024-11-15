const { Inventory } = require('../database/db');

const createInventory = async (req, res) => {
    try {
        const { quantity, sold_quantity, bin_location_id, status_id, product_id } = req.body;
        const inventory = await Inventory.create({ quantity, sold_quantity, bin_location_id, status_id, product_id});
        res.status(201).send({
            status: "correcto",
            message: "Inventario creado correctamente",
            data: inventory
        });
    } catch (error) {
        console.log(error);
        res.status(503).send({
            status: "Hubo un problema al intentar crear el inventario",
            message: error.message
        });
    }
};

const getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findAll();
        res.status(200).send(inventory);
    } catch (error) {
        console.log(error);
        res.status(503).send({
            status: "Hubo un problema al intentar obtener el inventario",
            message: error.message
        });
    }
}

const getInventoryById = async (req, res) => {
    try{
        const { id } = req.params;
        const inventory = await Inventory.findByPk(id);
        if(!inventory){
            return res.status(404).send({
                status: "No encontrado",
                message: `No se encontró el inventario con ID ${id}`
            });
        }
        res.status(200).send(inventory);
    }catch(error){
        console.log(error);
        res.status(503).send({
            status: "Hubo un problema al intentar obtener el inventario",
            message: error.message
        });
    }
}


const updateInventory = async (req, res) => {
    try{
        const { id } = req.params;
        const { quantity, sold_quantity, bin_location_id, status_id, product_id } = req.body;
        const inventory = await Inventory.findByPk(id);
        if(!inventory){
            return res.status(404).send({
                status: "No encontrado",
                message: `No se encontró el inventario con ID ${id}`
            });
        }
        const updatedInventory = await inventory.update({ quantity, sold_quantity, bin_location_id, status_id, product_id });
        res.status(200).send({
            status: "correcto",
            message: "Inventario actualizado correctamente",
            data: updatedInventory
        });
    }catch(error){
        console.log(error);
        res.status(503).send({
            status: "Hubo un problema al intentar actualizar el inventario",
            message: error.message
        });
    }
}

const deleteInventory = async (req, res) => {  
    try{
        const { id } = req.params;
        const inventory = await Inventory.findByPk(id);
        if(!inventory){
            return res.status(404).send({
                status: "No encontrado",
                message: `No se encontró el inventario con ID ${id}`
            });
        }
        await inventory.destroy();
        res.status(200).send({
            status: "correcto",
            message: "Inventario eliminado correctamente"
        });
    }catch(error){
        console.log(error);
        res.status(503).send({
            status: "Hubo un problema al intentar eliminar el inventario",
            message: error.message
        });
    }
}


module.exports = {
    createInventory,
    getInventory,
    getInventoryById,
    updateInventory,
    deleteInventory
};