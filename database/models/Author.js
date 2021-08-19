module.exports = (sequelize, dataTypes) => {
    let alias = 'Author';
    let cols = {
        idauthor: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
        ,
        last_name: {
            type: dataTypes.STRING
        },
        nacionality: {  //typo en la db (corregir)
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'authors',
        timestamps: false
    };
    const Author = sequelize.define(alias, cols, config)

    /*  Author.associate=function(models){
        Author.hasMany(models.Products,{
            as:,
            foreignKey:
        })
    } */ 

    return Author
}