module.exports = (sequelize, dataTypes) => {
    let alias = 'PaymentMethod';
    let cols = {
        idpaymentMethod: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        payment_method: {
            type: dataTypes.STRING
        }
        
    };
    let config = {
        tableName: 'paymentMethods',
        timestamps: false
    };
    const PaymentMethod = sequelize.define(alias, cols, config)

    PaymentMethod.associate=function(models){
        PaymentMethod.hasMany(models.Cart,{
            as:'carts',
            foreignKey:'payment_method_id',
        })
    }

    return PaymentMethod
}