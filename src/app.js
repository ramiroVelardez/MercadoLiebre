// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require('express');
const { appendFile } = require('fs');
const { get } = require('http');
const app = express();

// Modulo nativo para manejar las rutas de los archivos
const path = require('path');

// Usando recursos estáticos.
app.use(express.static(path.join(__dirname, '../public')))

// Ponemos a escuchar el servidor
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('http://localhost:' + port);
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
let appGet = (x, y) => app.get(x, (req, res) => res.sendFile(path.join(__dirname, y)))
let appPost = (x, y) => app.post(x, (req, res) => res.sendFile(path.join(__dirname, y)))

appGet('/', './views/home.html')
appPost('/', './views/home.html')
appGet('/registrar', './views/register.html')
appGet('/login', './views/login.html')
