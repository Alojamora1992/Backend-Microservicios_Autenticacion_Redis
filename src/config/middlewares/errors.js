const repsonse = require('../utils/response');

const errors = (err, req, res) => {
    console.error('[error]', err);
    const message = err.message || 'Internal server error';
    const status = err.statusCode || 500;
    repsonse.error(req, res, message, status);
}

module.exports = errors;