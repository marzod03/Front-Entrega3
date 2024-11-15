module.exports = (sequelize, type) => {
    return sequelize.define(
        "payment_methods",
        {
          id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: type.STRING(20),
            allowNull: false,
          },
        },
        {
          timestamps: false,
        }
    );
};
