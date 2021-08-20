module.exports = (sequelize, dataTypes) => {
    let alias = 'Address';
    let cols = {
        idaddress: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: {
            type: dataTypes.VARCHAR(32) 
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
            type: dataTypes.VARCHAR(20)
        },
        city: {
            type: dataTypes.VARCHAR(20)
        },
        province: {
            type: dataTypes.VARCHAR(20)
        },
        country: {
            type: dataTypes.VARCHAR(20)
        },
       
    };
    let config = {
        tableName: 'addresses',
        timestamps: false
    };
    const Address = sequelize.define(alias, cols, config)

    /*  Adress.associate=function(models){
       
    } */ 

    return Address
}









