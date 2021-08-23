module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        iduser: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        admin: {
            type: dataTypes.CHAR(1)  
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        user_name: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING
        }
        ,
        last_name: {
            type: dataTypes.STRING
        },
        birth_date: {
            type: dataTypes.DATE
        },
        phone_number: {  
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)

    User.associate=function(models){
        User.hasMany(models.Cart,{
            as:'carts',
            foreignKey:'user_id',
        })
    }

    return User
}