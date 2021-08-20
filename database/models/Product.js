module.exports = (sequelize, dataTypes) => {
    

    let alias = 'Product';
    let cols = {
        idproduct: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: dataTypes.VARCHAR(64)  
        },
        price: {
            type: dataTypes.DECIMAL(10,2)
        },
        password: {
            type: dataTypes.VARCHAR(100)
        },
        synopsis: {
            type: dataTypes.VARCHAR(1000)
        },
        format: {
            type: dataTypes.CHAR(1)
        },
        isbn: {
            type: dataTypes.INTEGER
        }
        ,
        pages: {
            type: dataTypes.INTEGER
        },
        last_name: {
            type: dataTypes.VARCHAR(32)
        },
        release_date: {
            type: dataTypes.DATE
        }
        
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)

    Product.associate=function(models){
        Product.belongsToMany(models.Editorial,{
            as:'editorials',
            through:'productsEditorials',
            foreignKey:'idproduct',
            otherKey:'ideditorial',
            timestamps: false
        })
    }

    return Product
}

