const productosFaker = require('../data/productosFaker.js');

class ContenedorFaker {
  static getAll() {
    return productosFaker.list();    
  }
}

module.exports = ContenedorFaker;