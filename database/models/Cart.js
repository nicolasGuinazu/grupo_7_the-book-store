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
            as:'address',
            foreignKey:'address_id'
        })
    }
	Cart.associate=function(models){
        Cart.belongsTo(models.PaymentMethod,{
            as:'paymentMethod',
            foreignKey:'payment_method_id'
        })
    }
	Cart.associate=function(models){
        Cart.hasOne(models.Invoice,{
            as:'invoice',
            foreignKey:'invoice_id'
        })
    }
	
	Cart.associate=function(models){
        Cart.belongsTo(models.User,{
            as:'user',
            foreignKey:'user_id'
        })
    }
	
	
	Cart.associate=function(models){
        Cart.belongsToMany(models.Product,{
            as:'products',
            through:'cartsProducts',
            foreignKey:'cart_id',
            otherKey:'product_id',
            timestamps: false
        })
    }

    return Cart
}