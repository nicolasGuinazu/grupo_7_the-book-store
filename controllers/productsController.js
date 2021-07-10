const controller = {
    create: (req, res) =>{
        res.render('./products/createProduct');
    },

    modify: (req, res) =>{
        res.render('./products/modifyProduct');
    },

    detail: (req, res) =>{
        res.render('./products/productDetail');
    }
}

module.exports = controller;