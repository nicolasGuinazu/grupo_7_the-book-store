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

    return Editorial
}