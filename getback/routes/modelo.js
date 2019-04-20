var express = require('express');
var router = express.Router();

var modelo = require('../Modules/modelo')


router.post('/getdatamodelo', function (req, res, next) {
  var userData = {
    id: req.body.id,
  }
  modelo.getData(userData, function (error, data) {
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