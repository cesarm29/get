var mysql = require('mysql')

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "seguros"
})

connection.connect();

var cotizacionModel = {}

cotizacionModel.createCotizacion = function (data, callback) {

  var query = 'insert into cotizaciones (marca, modelo, anio, email) values ('+data.marca+','+data.modelo+','+data.anio+', "'+data.email+'");';
  if (connection) {
    connection.query(query, function (error, rows) {
      if (error) {
        console.log(error)
        callback(null, {
          "respuesta": "Error de conexión"
        })
      } else {
        if (rows.length != 0) {
          var jsonObj = {
            respuesta: "Success"
          }
          callback(null, jsonObj)
        } else {
          console.log("Error no se pudo insertar")
          callback(null, {
            "respuesta": "Error no se pudo insertar"
          })
        }
      }
    })
  } else {
    console.log("No se conecto con servidor")
    callback(null, {
      "Respuesta": "Error en Conexion"
    })
  }
}


module.exports = cotizacionModel;