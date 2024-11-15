const { Orders } = require("../database/db");

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll();
    res.status(200).send(orders);
  } catch (error) {
    res.status(503).send({
      status: "hay un problema",
      message: error.message,
    });
  }
};

// Create an order
const createOrder = async (req, res) => {
  try {
    const { cost, payment_method_id, sales_funnel_id, client_id, address_id } =
      req.body;

    const order = await Orders.create({
      cost,
      payment_method_id,
      sales_funnel_id,
      client_id,
      address_id,
    });
    res.status(201).send(order);
  } catch (error) {
    res.status(503).send({
      status: "hay un problema",
      message: error.message,
    });
  }
};

module.exports = {
  getOrders,
  createOrder,
};
