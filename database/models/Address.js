module.exports = (sequelize, dataTypes) => {
    let alias = 'Address';
    let cols = {
        idaddress: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: {
            type: dataTypes.STRING
        },
        street_number: {
            type: dataTypes.INTEGER
        },
        floor_apartment: {
            type: dataTypes.INTEGER
        },
        postal_code: {
            type: dataTypes.INTEGER
        },
        town: {
            type: dataTypes.STRING
        },
        city: {
            type: dataTypes.STRING
        },
        province: {
            type: dataTypes.STRING
        },
        country: {
            type: dataTypes.STRING
        },
       
    };
    let config = {
        tableName: 'addresses',
        timestamps: false
    };
    const Address = sequelize.define(alias, cols, config)

    Address.associate=function(models){
        Address.hasMany(models.Cart,{
            as:'carts',
            foreignKey:'address_id',
        })
    }

    return Address
}









