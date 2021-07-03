const controller = {
    login: (req, res) =>{
        res.render('./users/login');
    },

    register: (req, res) =>{
        res.render('./users/registerForm');
    }
}

module.exports = controller;