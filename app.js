// 1. Importar el módulo nativo http
const http = require('http');

// 2. Crear el servidor utilizando una función callback
const server = http.createServer((req, res) => {

    // 3. Configurar la cabecera (Status 200 y tipo de contenido)
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    // 4. Enviar el cuerpo de la respuesta y finalizar la comunicación
    res.end('¡Hola Mundo!');
});

// 5. Poner el servidor en escucha en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});