const swaggerUi = require('swagger-ui-express');
const express = require('express');
const swaggerDocument = require('./swagger');

const app = express();

app.use(express.json());

let users = [];

/**
 * @openapi
 * /user:
 *   get:
 *     summary: Retrieves all users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   cpf:
 *                     type: integer
 *                     description: User's CPF
 *                   name:
 *                     type: string
 *                     description: User's name
 *                   birth_date:
 *                     type: string
 *                     format: date
 *                     description: User's birthdate
 */
app.get('/user', (req, res) => {
    res.json(users);
});

/**
 * @openapi
 * /user:
 *   post:
 *     summary: Adds a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cpf
 *               - name
 *               - birth_date
 *             properties:
 *               cpf:
 *                 type: integer
 *                 description: User's CPF
 *               name:
 *                 type: string
 *                 description: User's name
 *               birth_date:
 *                 type: string
 *                 format: date
 *                 description: User's birthdate
 *     responses:
 *       201:
 *         description: User added successfully
 */
app.post('/user', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log('Server running on PORT 3000'));
