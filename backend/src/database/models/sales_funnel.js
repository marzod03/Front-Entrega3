module.exports = (sequelize, type) => {
  return sequelize.define(
    "sales_funnel",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: type.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
