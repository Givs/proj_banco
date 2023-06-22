const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API do Usuário',
            version: '1.0.0',
            description: 'API simples para gerenciamento de usuários',
        },
    },
    apis: ['./app.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
