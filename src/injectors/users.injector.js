const srv = require('../services/users.service');
const store = require('../store/dummy');

//inyeccion de la dependencia store en el servicio.
const userServiceWithStore = srv(store);

module.exports = userServiceWithStore;