const userServices = require('../injectors/users.injector');
const response = require('../config/utils/response');

module.exports = {
    // Obtener todos los usuarios.
    getUsers: async (req, res) => {
        try {
            const users = await userServices.listUsers();
            response.success(req, res, users, 200);
        } catch (error) {
            response.error(req, res, error.message, 500);
        }
    },
    // Obtener un usuario por id.
    getUsersById: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await userServices.getUserById(id);
            response.success(req, res, user, 200);
        } catch (error) {
            response.error(req, res, error.message, 500);
        }
    },
    // Crear un usuario.
    createUsers: async (req, res) => {
        try {
            const body = req.body;
            const user = await userServices.createUser(body);
            response.success(req, res, user, 201);
        } catch (error) {
            response.error(req, res, error.message, 500);
        }
    },
    //Login de usuario.
    loginUser: async (req, res) => {
        try {
            const {username, password}= req.body;
            const user = await userServices.loginUser(username,password);
            response.success(req, res, user, 200);
        } catch (error) {
            response.error(req, res, error.message, 500);
        }
    },
    // Actualizar un usuario.
    updateUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const userData = req.body;
            const user = await userServices.updateUser(userId,userData);
            response.success(req, res, user, 200);
        } catch (error) {
            response.error(req, res, error.message, 500);
        }
    }
}