var express = require('express');
var router = express.Router();

var anio = require('../Modules/anio')


router.get('/getdataanio', function (req, res, next) {
  var userData = {
  }
  anio.getData(userData, function (error, data) {
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