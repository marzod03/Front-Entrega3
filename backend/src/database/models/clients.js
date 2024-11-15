module.exports = (sequelize, type) => {
  return sequelize.define('clients', {
    id: {
      type: type.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: type.STRING(50), 
      allowNull: false,
    },
    last_name: {
      type: type.STRING(50), 
      allowNull: false,
    },
    email: {
      type: type.STRING(50),
      allowNull: false,
      unique: true, 
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: type.STRING(10), 
      allowNull: true,
      unique: true, 
    },
    company: {
      type: type.STRING(50), 
      allowNull: true,
    },
    channel_id: {
      type: type.STRING(50),
      allowNull: true,
    },
    sales_funnel_id: {
      type: type.INTEGER, 
      references: {
        model: 'sales_funnels',
        key: 'id',
      },
    },
  }, { 
    timestamps: false,
  });
};
