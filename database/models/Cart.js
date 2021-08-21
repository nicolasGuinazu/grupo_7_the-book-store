module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';
    let cols = {
        idcart: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
        
    };
    let config = {
        tableName: 'carts',
        timestamps: false
    };
    const Cart = sequelize.define(alias, cols, config)

    Cart.associate=function(models){
        Cart.belongsTo(models.Adress,{
            as:'adress',
            foreignKey:'idadress'
        })
    }
	Cart.associate=function(models){
        Cart.belongsTo(models.PaymentMethod,{
            as:'paymentMethod',
            foreignKey:'idpaymentMethod'
        })
    }
	Cart.associate=function(models){
        Cart.belongsTo(models.Invoice,{
            as:'invoice',
            foreignKey:'idinvoice'
        })
    }
	
	Cart.associate=function(models){
        Cart.belongsTo(models.User,{
            as:'user',
            foreignKey:'iduser'
        })
    }
	
	
	Cart.associate=function(models){
        Cart.belongsToMany(models.Product,{
            as:'products',
            through:'cartsProducts',
            foreignKey:'idcart',
            otherKey:'idproduct',
            timestamps: false
        })
    }

    return Cart
}