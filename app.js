// 1. Importar express
const express = require('express');

// 2. Crear la instancia
const app = express();

// 3. Definir el puerto
const PORT = 3000;

// 4. Ruta principal
app.get('/', (req, res) => {
    res.send('¡Hola Mundo con Express! - Proyecto E2-M6');
});

// 5. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});