const { options } = require('../database/options/sqlite3DB');
const knex = require('knex')(options);

const list = async () => {
    try {
        const mensajes = await knex('chats').select('*');
        return mensajes;
    } catch (err) {
        throw new Error('No se pueden leer los mensajes', err)
    }
}

const add = (mensaje) => {
    try {
        knex('chats')
        .insert(mensaje)
        .then(() => {
        return ('Mensaje enviado existosamente')
        })
    } catch (error) {
        throw new Error('Error mensaje no enviado' + error)
    }
}

module.exports = { list, add };