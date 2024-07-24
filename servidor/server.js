const express = require('express');
const app = express();
const cors = require('cors');
const productoRutas = require('./rutas/productoRutas');
require('./configuracion/bd'); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productoRutas);

app.listen(8080, () => {
    console.log('El servidor ya está encendido en el puerto 8080.');
});