const express = require('express');
const path = require('path');
require('dotenv').config(); // ← CORREGIDO: debe ser `.config()`, no `.configure(app);fig()`

// app de express
const app = express();

// Socket.io setup
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
// mensajes de socket
require('./sockets/socket');


const publicPath = path.join(__dirname, 'public'); // ← corregido `publictPath` a `publicPath`

// Middleware para servir archivos estáticos
app.use(express.static(publicPath));

// Usar PORT desde .env o default 3000
const PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Server is running on port ${PORT}`);
});
