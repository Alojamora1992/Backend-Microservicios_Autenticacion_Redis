const TABLA = 'user'; // tabla de la base de datos.
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const err = require('../config/utils/error')

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require('../store/dummy');
    }

    // Obtener todos los usuarios.
    const listUsers = async () => {
        const users = await store.list(TABLA);
        return users;
    };

    // Obtener un usuario por id.
    const getUserById = async (id) => {
        const user = await store.get(TABLA, id);
        return user;
    };

    // Crear un usuario.
    const createUser = async (body) => {
        const user = {
            id: body.id,
            name: body.name,
            username: body.username,
            password: await bcrypt.hash(body.password,10),
        };  
        await store.upsert(TABLA, user);
        return user;
    };

    //Generar token de usuario.
    const generateToken = async (dataUser) => {
        return jwt.sign(dataUser, process.env.JWT_SECRET);
    }

    //Login de usuario.
    loginUser = async (username, password) => {
        const userLogin = await store.query(TABLA, {username:username});
        const isPasswordValid = await bcrypt.compare(password, userLogin.password);
        if(!isPasswordValid){
            throw err('Invalid password', 401)
        }else{
            return generateToken(userLogin);
        }  
    }

    // Actualizar un usuario.
    const updateUser = async ( userId, userData) => {
        const user = await store.update(TABLA,userId, userData);
        return user;
    };


    return {
        listUsers,
        getUserById,
        createUser,
        loginUser,
        updateUser
        
    };
};
