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
            foreignKey:'ideditorial',
            otherKey:'idproduct',
            timestamps: false
        })
    }

      
    

    return Editorial
}