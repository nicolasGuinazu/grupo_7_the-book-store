const db = require("../../database/models");
const { Sequelize } = require('sequelize');
const controller={
    products: async (req, res) => {
        try {
          let productsApi = await db.Product.findAll({
            include: ["author", "genre"],
            attributes: ['idproduct','name','synopsis','image'] //selecciona unicamente estas columnas de la base
          }); 
          let products=productsApi.map((product)=>{ //por cada elemento del array productsApi se le agrega la propiedad urlDetail
            
            return{
              ...product.dataValues,
              image:`http://localhost:3000/images/products/${product.image}`,
              urlDetail:`http://localhost:3000/api/products/${product.idproduct}`
            } 
          })

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
      productsDetails: async (req, res) => {
        try{
          let singleProduct=await db.Product.findOne({
            where:{idproduct:req.params.id},
            include: ["author", "genre"],
          })
          res.json({
            meta:{
              status:200,
            },
            data:{
              ...singleProduct.dataValues, //para usar el spread hay que acceder a esa propiedad
              urlAvatar:`http://localhost:3000/images/products/${singleProduct.dataValues.image}`
            }
          });
        }
        catch(err){
          console.log(err);
        }

      }
}

module.exports=controller