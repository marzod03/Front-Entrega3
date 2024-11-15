module.exports = (sequelize, type) => {
    return sequelize.define('track_inventory', {
        id: {
            type: type.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: type.DOUBLE
        },
        guide_pdf: {
            type: type.TEXT
        },
        guide_id: {
            type: type.BIGINT,
            references: {
                model: 'guides',
                key: 'id'
            },
        },
        inventory_id: {
            type: type.BIGINT,
            // references: {
            //     model: 'inventory',
            //     key: 'id'
            // }
        }
    }, { timestamps : false })
}