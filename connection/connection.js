const mongoose = require('mongoose');

const url = process.env.MONGO_URL || 'mongodb://localhost:27017/ecommerce';

mongoose.connect(
    url ,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
)

mongoose.connection.on('open', () => {
    console.log('Conectado a la base de datos');
}).on('error', (err) => {
    console.log('Error al conectarse a la base de datos', err);
});