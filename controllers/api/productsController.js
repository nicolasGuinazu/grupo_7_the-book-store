const db = require("../../database/models");
const { Sequelize } = require('sequelize');
const controller={
    products: async (req, res) => {
        try {
          let products = await db.Product.findAll({
            include: ["author", "genre"],
            attributes: ['idproduct','name','synopsis'] //selecciona unicamente estas columnas de la base
          }); 
          let genreList=[] //array base para guardar generos con productos asociados
          let genres = await db.Genre.findAll({
            attributes: { 
              include: [[Sequelize.fn("COUNT", Sequelize.col("genre_id")), "count"]]  //cuenta cantidad de veces q se repite genre_id
          },
          include: ["products"],
          group: ['idgenre'], //agrupa por idgenre
          
          });
          for(let i = 0; i < genres.length; i++){
           if(genres[i].dataValues.count>0){ //si el genero tiene al menos un producto se agrega al array (para no guardar generos sin productos asociados)
            genreList.push({name:genres[i].dataValues.name,count:genres[i].dataValues.count})
           }
            
         /*    newGenre.push({name:genres[i].name,count:genres[i].count}) */
          }
          
          res.json({
            meta:{
              status:200,
              count:products.length,
              countByGenre:genreList
            },
            data:{
              products,
            }
          });
        } catch (err) {
          console.log(err);
        }
      },
}

module.exports=controller