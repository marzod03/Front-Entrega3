module.exports = (sequelize, type) => {
  return sequelize.define('quotations', {
    id: {
      type: type.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    total: {
      type: type.DOUBLE,
      allowNull: false,
    },
    valid_time: {
      type: type.STRING(20),
      allowNull: false,
    },
    pdf_url: {
      type: type.STRING(255), 
      allowNull: true,
    },
    payment_method_id: {
      type: type.INTEGER,
      references: {
        model: 'payment_methods',
        key: 'id',
      },
    },
    client_id: {
      type: type.INTEGER,
      references: {
        model: 'clients',
        key: 'id',
      },
    },
  }, {
    timestamps: false,
  });
};
