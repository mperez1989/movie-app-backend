const express = require('express');
const genreRouter = require('./genre.routers');
const actorRouter = require('./actor.routers');
const directorRouter = require('./director.router');
const movieRouter = require('./movie.router');
const router = express.Router();


// colocar las rutas aquí
router.use('/genres', genreRouter)
router.use('/actors', actorRouter)
router.use('/directors', directorRouter)
router.use('/movies', movieRouter)




module.exports = router;