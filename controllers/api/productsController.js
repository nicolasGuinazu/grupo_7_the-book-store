const db = require("../../database/models");
const controller={
    products: async (req, res) => {
        try {
          let products = await db.Product.findAll({
            include: ["author", "genre"],
            attributes: ['idproduct','name','synopsis'] //selecciona unicamente estas columnas de la base
          }); 
          res.json({
            meta:{
              status:200,
              count:products.length
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