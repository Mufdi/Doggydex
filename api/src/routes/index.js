const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRoutes = require('./dogs')
const temperamentsRoutes = require('./temperaments')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogsRoutes)
router.use('/dogs/:id', dogsRoutes)
router.use('/dogs/create', dogsRoutes)
router.use('/temperaments', temperamentsRoutes)

module.exports = router;
