const express = require("express");
const router = express.Router();

const { 
    createInventory, 
    getInventory, 
    getInventoryById, 
    updateInventory, 
    deleteInventory 
} = require("../controllers/inventories.controller");

router.use(express.json());

router.post("/", createInventory);
router.get("/", getInventory);
router.get("/:id", getInventoryById);
router.put("/:id", updateInventory);
router.delete("/:id", deleteInventory);

module.exports = router;