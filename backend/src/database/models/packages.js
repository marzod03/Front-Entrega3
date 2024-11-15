module.exports = (sequelize, type) => {
    return sequelize.define('packages', {
        id: {
            type: type.BIGINT,  
            autoIncrement: true,
            primaryKey: true
        },
        height: {
            type: type.NUMERIC(6,2),  
        },
        width: {
            type: type.NUMERIC(6,2),  
        },
        length: {
            type: type.NUMERIC(6,2),  
        },
        weight: {
            type: type.NUMERIC(6,2), 
        },
        product_id: {
            type: type.INTEGER, 
            references: {
                model: 'products', 
                key: 'id'
            }
        }
    }, { timestamps: false });
};
