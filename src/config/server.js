require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router')

//inicializar variables
const port = process.env.PORT || 3000;

//inicializar express para uso de middlewares
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//rutas: localhost:3000/api/v1/...
app.use(process.env.API_VERSION_ROUTE, router)

//Marcha del servidor
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
}); 