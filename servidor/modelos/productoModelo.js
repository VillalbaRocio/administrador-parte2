const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    titulo: { 
        type: String,
        required: true 
    },
    precio: 
    {   type: Number,
        required: true
    },
    descripcion: { 
        type: String,
        required: true 
    }
});

module.exports = mongoose.model('Producto', productoSchema);