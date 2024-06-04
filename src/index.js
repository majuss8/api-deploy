// require('dotenv').config({
//     path: './src/.env'
// }) // pode criar um arquivo 
require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    return res.json('API está OK!')
});

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Servidor em pé na porta ${port}`));