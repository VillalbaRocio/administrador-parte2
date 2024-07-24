const Productos = require('../modelos/productoModelo');

module.exports.CrearProducto = (req, res) => {
    Productos.create(req.body)
    .then((nuevoProducto) => {
        return res.status(201).json(nuevoProducto);
    })
    .catch((error) => {
        console.log(error.message);
        res.statusMessage = error.message;
        return res.status(400).json(error.message);
    });
};

module.exports.ObtenerProductos = (req, res) => {
    Productos.find()
        .then((productos) => res.status(200).json(productos))
        .catch((error) => {
            console.log(error.message);
            res.status(400).json(error.message);
        });
};

module.exports.ObtenerProductoPorId = (req, res) => {
    Productos.findById(req.params.id)
        .then((producto) => {
            if (!producto) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.status(200).json(producto);
        })
        .catch((error) => {
            console.log(error.message);
            res.status(400).json(error.message);
        });
};

