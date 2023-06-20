const TABLA = 'user'; // tabla de la base de datos.

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
        };  
        await store.upsert(TABLA, user);
        return user;
    };

    return {
        listUsers,
        getUserById,
        createUser,
    };
};
