var express = require('express');
var router = express.Router();

var cotizacion = require('../Modules/cotizacion')
//create one new cotizacion
router.post('/createcotizacion', function (req, res, next) {
  var cotizacionData = {
    marca: req.body.marca,
    modelo: req.body.modelo,
    anio: req.body.anio,
    email: req.body.email
  }
  cotizacion.createCotizacion(cotizacionData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})



module.exports = router;