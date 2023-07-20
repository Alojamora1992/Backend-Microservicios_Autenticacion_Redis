const mysql = require('mysql');

function createDBConnection() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'carlos2413',
    database: 'microservicios'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos: ' + err.stack);
      return;
    }
    console.log('Conexión exitosa a la base de datos.');
  });

  return connection;
}

module.exports = createDBConnection;
