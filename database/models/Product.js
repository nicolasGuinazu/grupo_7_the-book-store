module.exports = (sequelize, dataTypes) => {
    

    let alias = 'Product';
    let cols = {
        idproduct: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(64)
        },
        image: {
            type: dataTypes.VARCHAR(64)  
        },
        price: {
            type: dataTypes.DECIMAL(10,2)
        },
        synopsis: {
            type: dataTypes.VARCHAR(1000)
        },
        format: {
            type: dataTypes.CHAR(1)
        },
        isbn: {
            type: dataTypes.INTEGER
        },
        pages: {
            type: dataTypes.INTEGER
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
        Product.belongsTo(models.Author,{
            as:'author',
            foreignKey:'idproduct',
            timestamps: false
        })
    };


    Product.associate=function(models){
        Product.belongsTo(models.Genre,{
            as:'genre',
            foreignKey:'idproduct',
            timestamps: false
        })
    }

    Product.associate=function(models){
        Product.belongsToMany(models.Cart,{
            as:'carts',
            through:'cartsProducts',
            foreignKey:'idproduct',
            otherKey:'idcart',
            timestamps: false
        })
    }

    Product.associate=function(models){
        Product.belongsToMany(models.Editorial,{
            as:'editorials',
            through:'productsEditorials',
            foreignKey:'idproduct',
            otherKey:'ideditorial',
            timestamps: false
        })
    };

    return Product
}

