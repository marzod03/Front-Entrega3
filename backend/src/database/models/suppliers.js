module.exports = (sequelize, type) => {
    return sequelize.define('suppliers', {
        id: {
            type: type.BIGINT,  
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING(255),  
            allowNull: false
        },
        quality: {
            type: type.INTEGER,  
            validate: {
                min: 1,
                max: 100
            }
        },
        time: {
            type: type.INTEGER, 
            validate: {
                min: 1,
                max: 100
            }
        },
        service: {
            type: type.INTEGER,  
            validate: {
                min: 1,
                max: 100
            }
        },
        product_id: {
            type: type.BIGINT,  
            references: {
                model: 'products',  
                key: 'id'
            }
        }
    }, { timestamps: false });
};
