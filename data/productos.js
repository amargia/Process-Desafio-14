const { options } = require('../database/options/mariaDB');
const knex = require('knex')(options)

const list = async () => {
  try {
    const productos = await knex
    .from("productos")
    .select('*')
    .orderBy('price', 'desc');
    return productos;
  } catch (error) {
    throw new Error("No hay productos en DB" , error);
  }
};

const getById = async (id) => {
  try {
    await knex
    .from('productos') 
    .select('*') 
    .where({ id }) 
    .then((data) => { 
      return data;
    }).catch((error) => {    
      throw new Error('Producto no encontrado', error)
    });
  } catch (error) {
    throw new Error('Producto no encontrado', error)
  } 
} 

const add = async (product) => {
  try {
    knex('productos')
    .insert(product)
    .then(() => {
      return ('Producto ingresado existosamente')
    }).catch ((error) => {
        throw new Error ('Producto no se pudo ingresar', error)
    })
  } catch (error) {
    throw new Error('No se pudo crear el producto', error)
  }
}

const deleteById = (id) => {
  try {
    knex
    .from('productos')
    .where('id', '=' , id)
    .del()
    .then(() => {
      return ('Producto eliminado exitosamente')
    }).catch((error) => {
      throw new Error ('Producto no se pudo eliminar', error)
    })
  } finally {
    knex.destroy();
  }
};


module.exports = { list, getById, add, deleteById };