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

    Editorial.associate=function(models){
        Editorial.belongsToMany(models.Product,{
            as:'products',
            through:'productsEditorials',
            foreignKey:'editorial_id',
            otherKey:'product_id',
            timestamps: false
        })
    }

      
    

    return Editorial
}