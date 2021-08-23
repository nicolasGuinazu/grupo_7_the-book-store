module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        idgenre: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'genres',
        timestamps: false
    };
    const Genre = sequelize.define(alias, cols, config)


    Genre.associate=function(models){
        Genre.hasMany(models.Product,{
            as:'products',
            foreignKey:'genre_id',
        })
    } 

    return Genre
}