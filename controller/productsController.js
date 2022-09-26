const methodBank = require("../data/productos")

class Contenedor { 
  
  static getAll() {
    const productos = methodBank.list();
    return productos;
  }

  static create(title, price, thumbnail) {
    const prod = methodBank.add({title, price, thumbnail});
    return prod;
  }

  static delete(id) {
    const deleteProd = methodBank.deleteById(id);
    return deleteProd;
  }

  static getById(id) {
    return methodBank.getById(id)
  }
}

module.exports = Contenedor;