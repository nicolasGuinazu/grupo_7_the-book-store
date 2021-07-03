const controller = {
    create: (req, res) =>{
        res.render('./products/createProduct');
    },

    modify: (req, res) =>{
        res.render('./products/modifyProduct');
    }
}

module.exports = controller;