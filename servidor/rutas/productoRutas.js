const express = require('express');
const router = express.Router();
const productoControlador = require('../controladores/productoControlador');

router.get('/', productoControlador.ObtenerProductos);
router.get('/:id', productoControlador.ObtenerProductoPorId);
router.post('/nuevo', productoControlador.CrearProducto);

module.exports = router;