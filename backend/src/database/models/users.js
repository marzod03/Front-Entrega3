module.exports = (sequelize, type) => {
  return sequelize.define('users', {
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
      type: type.STRING(30),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    rol: {
      type: type.STRING(30),
      allowNull: false,
      comment: 'Rol que tiene un usuario: Vendedor/cotizador/Contabilidad',
    },
  }, {
    timestamps: false,
  });
};
