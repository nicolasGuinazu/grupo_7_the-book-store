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
        nationality: { 
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'authors',
        timestamps: false
    };
    const Author = sequelize.define(alias, cols, config)


    Author.associate=function(models){
        Author.hasMany(models.Product,{
            as:'products',
            foreignKey:"author_id",
        
        })
    } 

    return Author
}