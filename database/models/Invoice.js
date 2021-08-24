module.exports = (sequelize, dataTypes) => {
    let alias = 'Invoice';
    let cols = {
        idinvoice: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: dataTypes.INTEGER
        }
        
    };
    let config = {
        tableName: 'invoices',
        timestamps: false
    };

    const Invoice = sequelize.define(alias, cols, config)

    Invoice.associate=function(models){
        Invoice.hasMany(models.Cart,{
            as:'cart',
            foreignKey:'invoice_id',
        })
    }

    return Invoice
}