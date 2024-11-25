const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

const ContactsRoutes = require("./src/routes/contact.routes");
const ProductsRoutes = require("./src/routes/product.routes");

const InventoryRoutes = require("./src/routes/inventory.routes");

const OrdersRoutes = require("./src/routes/orders.routes");

// Equipo 4 Rutas
const GuidesRoutes = require("./src/routes/guides.routes");


var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));

// RUTA DE CONTACTOS
app.use("/contactos", ContactsRoutes);
app.use("/products", ProductsRoutes);
app.use("/inventory", InventoryRoutes);
app.use("/orders", OrdersRoutes);

// CRUD EQUIPO 4
app.use('/guides', GuidesRoutes );


app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
