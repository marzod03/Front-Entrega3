const { Sequelize, DataTypes } = require("sequelize");

// Schema definitions
const productModel = require("./models/products");
const track_inventoryModel = require("./models/track_inventory");
const carriersModel = require("./models/carriers");
const guidesModel = require("./models/guides");
const clientsModel = require("./models/clients");
const usersModel = require("./models/users");
const quotationsModel = require("./models/quotations");
const ordersModel = require("./models/orders");
const addressesModel = require("./models/addresses");
const payment_methodsModel = require("./models/payment_methods");
const sales_funnelModel = require("./models/sales_funnel");
const sellsModel = require("./models/sells");
const categoriesModel = require("./models/categories");
const packagesModel = require("./models/packages");
const suppliersModel = require("./models/suppliers");
const statusesModel = require("./models/status");
const binLocationsModel = require("./models/bin_location");
const inventoryModel = require('./models/inventory');

let sslopt = {};

if (process.env.NODE_ENV !== "development") {
  sslopt = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    protocol: "postgres",
    port: process.env.DB_PORT,
    dialectOptions: sslopt,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(error);
    console.log("Error while trying connecting to Database");
  });

// Schemas Equipo 1
const Orders = ordersModel(sequelize, DataTypes);
const Addresses = addressesModel(sequelize, DataTypes);
const PaymentMethods = payment_methodsModel(sequelize, DataTypes);
const SalesFunnel = sales_funnelModel(sequelize, DataTypes);
const Sells = sellsModel(sequelize, DataTypes);
const Products = productModel(sequelize, DataTypes);

// Schemas Equipo 2
const Clients = clientsModel(sequelize, DataTypes);
const Users = usersModel(sequelize, DataTypes);
const Quotations = quotationsModel(sequelize, DataTypes);

// Schemas Equipo 3
const Categories = categoriesModel(sequelize, DataTypes);
const Packages = packagesModel(sequelize, DataTypes);
const Suppliers = suppliersModel(sequelize, DataTypes);
const Statuses = statusesModel(sequelize, DataTypes);
const BinLocations = binLocationsModel(sequelize, DataTypes);

// Schemas Equipo 4
const Carriers = carriersModel(sequelize, DataTypes);
const Guides = guidesModel(sequelize, DataTypes);
const Track_inventory = track_inventoryModel(sequelize, DataTypes);
const Inventory = inventoryModel(sequelize, DataTypes);

// Associations Equipo 4
Guides.belongsToMany(Inventory, {
  through: Track_inventory,
  foreignKey: 'guide_id',
  otherKey: 'inventory_id'
});

Inventory.belongsToMany(Guides, {
  through: Track_inventory,
  foreignKey: 'inventory_id',
  otherKey: 'guide_id'
});

Guides.belongsTo(Carriers, {
  foreignKey: "couriers",
  targetKey: "id",
});

// Associations Equipo 1
Products.belongsToMany(Quotations, {
  through: 'quotations_product',
  foreignKey: 'product_id',
  otherKey: 'quotation_id'
});

Orders.hasMany(Sells, {
  foreignKey: "order_id",
  sourceKey: "id",
});

Sells.belongsTo(Orders, {
  foreignKey: "order_id",
  targetKey: "id",
});

Orders.belongsTo(PaymentMethods, {
  foreignKey: "payment_method_id",
  targetKey: "id",
});

PaymentMethods.hasMany(Orders, {
  foreignKey: "payment_method_id",
  sourceKey: "id",
});

Orders.belongsTo(SalesFunnel, {
  foreignKey: "sales_funnel_id",
  targetKey: "id",
});

SalesFunnel.hasMany(Orders, {
  foreignKey: "sales_funnel_id",
  sourceKey: "id",
});

Orders.belongsTo(Addresses, {
  foreignKey: "address_id",
  targetKey: "id",
});

Addresses.hasMany(Orders, {
  foreignKey: "address_id",
  sourceKey: "id",
});

// Associations Equipo 3
Products.belongsTo(Categories, {
  foreignKey: 'category_id',
  targetKey: 'id',
});

Categories.hasMany(Products, {
  foreignKey: 'category_id',
  sourceKey: 'id',
});

Packages.belongsTo(Products, {
  foreignKey: 'product_id',
  targetKey: 'id',
});

Suppliers.belongsTo(Products, {
  foreignKey: 'product_id',
  targetKey: 'id',
});

Inventory.belongsTo(Products, {
  foreignKey: 'product_id',
  targetKey: 'id',
});

Inventory.belongsTo(Statuses, {
  foreignKey: 'status_id',
  targetKey: 'id',
});

Inventory.belongsTo(BinLocations, {
  foreignKey: 'bin_location_id',
  targetKey: 'id',
});

sequelize
  .sync({ alter: false })
  .then(() => {
    console.log("Database && tables was synchronized!");
  })
  .catch((e) => {
    console.log(e);
    console.log("Error while trying connecting to Database");
  });

module.exports = {
  Orders,
  Addresses,
  PaymentMethods,
  SalesFunnel,
  Sells,
  Products,
  Carriers,
  Guides,
  Track_inventory,
  Inventory,
  Clients,
  Users,
  Categories,
  BinLocations,
  Statuses,
  Packages,
};
