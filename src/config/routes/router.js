const {Router} = require('express');
const router = Router();
const secure = require('../../config/middlewares/authSecure');

//Rutas usuarios
const {
    createUsers,
    getUsers,
    getUsersById,
    updateUser,
    //deleteUser,
    loginUser
} = require('../../controllers/users.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.put('/users/:id',secure, updateUser);
// router.delete('/users/:id', deleteUser);

router.post('/users/login', loginUser)


module.exports = router;