module.exports = (sequelize, type) => {
    return sequelize.define('categories', {
        id: {
            type: type.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING(50),
            allowNull: false
        },
    }, { timestamps: false });
}
