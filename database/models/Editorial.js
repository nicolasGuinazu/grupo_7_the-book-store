module.exports = (sequelize, dataTypes) => {
    let alias = 'Editorial';
    let cols = {
        ideditorial: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'editorials',
        timestamps: false
    };
    const Editorial = sequelize.define(alias, cols, config)

    /*  Genre.associate=function(models){
        Genre.hasMany(models.Products,{
            as:'products',
            foreignKey:'genre_id'
        })
    } */ 

    return Editorial
}