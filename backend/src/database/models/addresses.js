module.exports = (sequelize, type) => {
  return sequelize.define("addresses", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    country: {
      type: type.STRING(20),
      allowNull: false,
    },

    state: {
      type: type.STRING(20),
      allowNull: false,
    },

    city: {
      type: type.STRING(20),
      allowNull: false,
    },

    postal_code: {
      type: type.STRING(20),
      allowNull: false,
    },

    address_line_1: {
      type: type.STRING(20),
      allowNull: false,
    },

    address_line_2: {
      type: type.STRING(20),
      allowNull: true,
    },

    address_line_3: {
      type: type.STRING(20),
      allowNull: true,
    },

    comments: {
      type: type.STRING(30),
      allowNull: true,
    },

    channel_id: {
      type: type.STRING(50),
      allowNull: false,
    },
  });
};
