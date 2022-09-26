const { options } = require("./options/sqlite3DB.js")
const knex = require("knex")(options);

knex.schema.createTable("chats", (table) => {
    table.increments('id');
    table.string('email');
    table.string('fecha');
    table.string('mensaje')
}).then (() => {
    console.log("Chat creado");
}).catch ((error) => {
    console.log(error);
}).finally (() => {
    knex.destroy();
})