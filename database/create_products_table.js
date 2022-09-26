const { options } = require("./options/mariaDB")
const knex = require("knex")(options);

knex.schema.createTable("productos", (table) => {
    table.increments('id');
    table.string('title');
    table.integer('price');
    table.string('thumbnail');
}).then (() => {
    console.log('Tabla de productos creada');
}).catch ((error) => {
    console.log(error);
}).finally (() => {
    knex.destroy()
})