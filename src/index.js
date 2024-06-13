// require('dotenv').config({
//     path: './src/.env'
// }) // pode criar um arquivo 
require('dotenv').config();
const cors = require('cors');
const knex = require('./conexao');
const express = require('express');

const app = express();

app.use(cors())

// app.use(cors({
//     origin: 'https://cubos.academy//' //domínio da cubos 
// }))

// app.use(cors({
//     origin: ['https://cubos.academy//', 'https://google.com/'] // array de domínios que terão acesso a sua api
// }))

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const carros = await knex('carros')
        return res.json(carros)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro do servidor' })
    }
});

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Servidor em pé na porta ${port}`));