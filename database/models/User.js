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
            type: dataTypes.VARCHAR(100)
        },
        password: {
            type: dataTypes.VARCHAR(100)
        },
        avatar: {
            type: dataTypes.VARCHAR(64)
        },
        user_name: {
            type: dataTypes.VARCHAR(64)
        },
        name: {
            type: dataTypes.VARCHAR(32)
        }
        ,
        last_name: {
            type: dataTypes.VARCHAR(32)
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
            foreignKey:'idcart',
        })
    }

    return User
}