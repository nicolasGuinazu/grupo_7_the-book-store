const db = require("../../database/models");
const controller={
    users: async (req, res) => {
        try {
          let users = await db.User.findAll({
            attributes: ['iduser','name','email','avatar']
          });
          let usersApi=users.map((user)=>{  //por cada elemento del array usuario se le agrega la propiedad urlDetail
            
            return{
              ...user.dataValues, //la propiedad dataValues tiene todos los valores de ese user
              urlDetail:`http://localhost:3000/api/users/${user.iduser}`, //se agrega dinamicamente el id
              avatar:`http://localhost:3000/images/users/${user.avatar}`,
            } 
          })
          res.json({
            meta:{
              status:200,
              count:users.length
            },
            data:{
              usersApi,
           
            }
          });
         
        } catch (err) {
          console.log(err);
        }
      },
      usersDetails:async(req,res)=>{
        try{
          let singleUser=await db.User.findOne({
            where:{iduser:req.params.id},
            attributes: ['iduser','name','last_name','user_name','birth_date','phone_number','email','avatar']
          })
          res.json({
            meta:{
              status:200,
            },
            data:{
              ...singleUser.dataValues,
              urlAvatar:`http://localhost:3000/images/users/${singleUser.dataValues.avatar}`
            }
          });
        }
        catch(err){
          console.log(err);
        }

      },
    
}




module.exports=controller