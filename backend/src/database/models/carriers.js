module.exports = (sequelize, type) => {
    return sequelize.define('carriers', {
        id: {
            type: type.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING(30)
        }
    }, { timestamps : false })
}