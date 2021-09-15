const db = require("../../database/models");
const controller={
    users: async (req, res) => {
        try {
          let users = await db.User.findAll({
            attributes: ['iduser','name','email']
          });
          res.json({
            meta:{
              status:200,
              count:users.length
            },
            data:{
              users,
            }
          });
        } catch (err) {
          console.log(err);
        }
      },
    
}

module.exports=controller