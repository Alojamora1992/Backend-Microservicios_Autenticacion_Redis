const jwt = require('jsonwebtoken');
const err = require('../utils/error');

const authMiddleware = (req, res, next) => {
    // Obtener el token del encabezado de la solicitud
    const token = req.header('Authorization');
    
    // Verificar si se proporcionó un token
    if (!token) {
        throw err('No token provided', 401); 
        
    }
    try {
        // Verificar y decodificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Adjuntar el usuario decodificado a la solicitud
        req.user = decoded;
        // Verificar si el usuario del token intenta actualizar a otro usuario
        if (req.params.id !== req.user.id) {
            throw err('Unauthorized', 401);
        }
        
        // Continuar con el siguiente middleware o controlador
        next();
    } catch (error) {
        throw err('Invalid token', 401);
    }
};

module.exports = authMiddleware;