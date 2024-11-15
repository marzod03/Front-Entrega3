module.exports = (sequelize, type) => {
    return sequelize.define('inventory', {
        id: {
            type: type.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: type.NUMERIC(6,2),
            allowNull: false
        },
        sold_quantity: {
            type: type.NUMERIC(6,2),
            defaultValue: 0
        },
        bin_location_id: {
            type: type.BIGINT,
            references: {
                model: 'bin_locations', 
                key: 'id'
            }
        },
        status_id: {
            type: type.BIGINT,
            references: {
                model: 'statuses', 
                key: 'id'
            }
        }
    }, { timestamps: false });
}
