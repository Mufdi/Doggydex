const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRoutes = require('./dogs')
const temperamentsRoutes = require('./temperaments')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', dogsRoutes)
router.use('/:id', dogsRoutes)
router.use('/create', dogsRoutes)
router.use('/', temperamentsRoutes)

module.exports = router;
