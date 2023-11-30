const connection = require('../config/db');
const bcrypt = require('bcrypt');

async function listUsers(request, response) {
    connection.query('SELECT * FROM users', (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de usuários.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}

async function storeUser(request, response) {
    try {
        const name = request.body.name;
        const email = request.body.email;
        const password = request.body.password;

        // Gere um salt para usar no hash
        const salt = bcrypt.genSaltSync(10);

        // Hash da senha usando o salt
        const hashedPassword = bcrypt.hashSync(password, salt);

        const params = [name, email, hashedPassword];
        const query = 'INSERT INTO users(name, email, password) VALUES (?, ?, ?);';

        connection.query(query, params, (err, results) => {
            if (!err) {
                response.status(201).json({
                    success: true,
                    message: 'Sucesso! Usuário cadastrado.',
                    data: results
                });
            } else {
                response.status(400).json({
                    success: false,
                    message: 'Não foi possível realizar a ação. Verifique os dados informados',
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
            }
        });
    } catch (error) {
        response.status(500).json({
            success: false,
            message: 'Erro interno no servidor.',
            error: error.message
        });
    }
}

module.exports = {
    listUsers,
    storeUser
}