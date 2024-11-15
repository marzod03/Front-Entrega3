module.exports = (sequelize, type) => {
    return sequelize.define('guides', {
        id: {
            type: type.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        cost: {
            type: type.DOUBLE
        },
        guide_pdf: {
            type: type.TEXT
        },
        date_created: {
            type: type.DATE
        },
        couriers: {
            type: type.BIGINT,
            references: {
                model: 'carriers',
                key: 'id'
            },
        }
    }, { timestamps : false })
}