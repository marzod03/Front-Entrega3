module.exports = (sequelize, type) => {
    return sequelize.define('status', {
        id: {
            type: type.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING(100),
            allowNull: false
        }
    }, { timestamps: false });
}
