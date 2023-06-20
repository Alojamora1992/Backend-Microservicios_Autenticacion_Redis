const {Router} = require('express');
const router = Router();

//Rutas usuarios
const {
    createUsers,
    getUsers,
    getUsersById,
    updateUser,
    deleteUser,
} = require('../../controllers/users.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);


module.exports = router;