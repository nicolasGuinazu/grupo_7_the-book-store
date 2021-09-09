module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        idproduct: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        author_id:{
            type: dataTypes.INTEGER
        },
        genre_id:{
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING  
        },
        price: {
            type: dataTypes.DECIMAL(10,2)
        },
        synopsis: {
            type: dataTypes.STRING
        },
        format: {
            type: dataTypes.CHAR
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
            foreignKey:'author_id',
            as:'author'
        }),
    
        Product.belongsTo(models.Genre,{
            as:'genre',
            foreignKey:'genre_id',
        }),
        Product.belongsToMany(models.Cart,{
            as:'carts',
            through:'cartsProducts',
            foreignKey:'product_id',
            otherKey:'cart_id',
            timestamps: false
        }),
        Product.belongsToMany(models.Editorial,{
                as:'editorials',
                through:'productsEditorials',
                foreignKey:'product_id',
                otherKey:'editorial_id',
                timestamps: false
            })
    
    }

    return Product
}

