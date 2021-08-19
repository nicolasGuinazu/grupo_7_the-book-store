module.exports = (sequelize, dataTypes) => {
    let alias = 'PaymentMethod';
    let cols = {
        idpaymentMethod: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        payment_method: {
            type: VARCHAR(20)
        }
        
    };
    let config = {
        tableName: 'paymentMethods',
        timestamps: false
    };
    const PaymentMethod = sequelize.define(alias, cols, config)

    /*  PaymentMethod.associate=function(models){
        )
    } */ 

    return PaymentMethod
}