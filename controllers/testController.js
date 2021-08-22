const db = require('../database/models');


const controller = {
    genres: async (req, res) => {
        try{
            let genres=await db.Genre.findAll()
            res.send(genres)
        }catch(err){
            console.log(err)
        }
  
    },
  
}

module.exports = controller;