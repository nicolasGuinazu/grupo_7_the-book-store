module.exports = (sequelize, dataTypes) => {
    let alias = 'Invoice';
    let cols = {
        idinvoice: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: dataTypes.DECIMAL(10,2)
        }
        
    };
    let config = {
        tableName: 'invoices',
        timestamps: false
    };
    const Invoice = sequelize.define(alias, cols, config)

    Invoice.associate=function(models){
        Invoice.hasMany(models.Cart,{
            as:'carts',
            foreignKey:'idcart',
        })
    }

    return Invoice
}