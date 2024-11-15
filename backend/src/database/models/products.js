module.exports = (sequelize, type) => {
    return sequelize.define('products', {
        id: {
            type: type.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING(255),
            allowNull: false
        },
        price: {
            type: type.NUMERIC(6,2),
            allowNull: false,  
            validate: {
                isDecimal: true, 
                min: 0           
            }
        },
        description: {
            type: type.TEXT,
        },
        technical_description: {
            type:type.TEXT,
        }, 
        sat_key: {
            type: type.STRING(50),  
        },
        data_sheet: {
            type: type.STRING(255),  
        },
        category_id: {
            type: type.BIGINT,  
            references: {
                model: 'categories', 
                key: 'id'
            }
        }
        // quantity: {
        //     type: type.DOUBLE
        // }
    }, { timestamps : false })
}