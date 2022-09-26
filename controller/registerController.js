const register = require('../data/register.js');

class registerController {
    static save(object) {
        return register.save(object);
    }
}

module.exports = registerController;