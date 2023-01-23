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
const p = 1|| 3000;
app.listen(3033, () => {
    console.log('http://localhost:3033');
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
let appget= (x, y) => app.get(x, (req, res) => res.sendFile(path.join(__dirname, y)))
let apppost= (x, y) => app.post(x, (req, res) => res.sendFile(path.join(__dirname, y)))

appget('/', './views/home.html')
appget('/registrar', './views/register.html')
appget('/login', './views/login.html')
