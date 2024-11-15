module.exports = (sequelize, type) => {
  return sequelize.define(
    "addresses",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      quantity: {
        type: type.INTEGER,
        allowNull: false,
      },

      pending_quantity: {
        type: type.INTEGER,
        allowNull: false,
      },

      product_id: {
        type: type.INTEGER,
        allowNull: false,
      },

      order_id: {
        type: type.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
