var express = require('express');
var router = express.Router();

var marca = require('../Modules/marca')


router.get('/getdatamarca', function (req, res, next) {
  var userData = {
  }
  marca.getData(userData, function (error, data) {
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