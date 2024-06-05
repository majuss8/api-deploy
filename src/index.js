// require('dotenv').config({
//     path: './src/.env'
// }) // pode criar um arquivo 
require('dotenv').config();
const cors = require('cors');

const express = require('express');

const app = express();
app.use(cors())
app.use(express.json());

app.get('/', async (req, res) => {
    return res.json('API está OK!')
});

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Servidor em pé na porta ${port}`));