module.exports = (sequelize, type) => {
  return sequelize.define(
    "orders",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      cost: {
        type: type.DECIMAL(6, 2),
      },
      payment_method_id: {
        type: type.INTEGER,
        allowNull: false,
      },

      sales_funnel_id: {
        type: type.INTEGER,
        allowNull: false,
      },

      client_id: {
        type: type.INTEGER,
        allowNull: false,
      },

      address_id: {
        type: type.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
