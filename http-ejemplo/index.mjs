

import http from 'http';

//Crear un servidor HTTP basico
const server = http.createServer((req, res) => {
    res.statusCode = 200;   // Establecemos el código de estado HTTP a 200 (OK)
    //  Indicamos que el contenido es texto plano
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola, Mundo!');  // Respuesta a cliente
});

//El servidor escucha en el puerto 3000

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000');

});