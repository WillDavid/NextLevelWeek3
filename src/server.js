// Importar dependencia
const express = require('express');
const path = require('path');

const pages = require('./pages');





// Se torna um função
// Iniciando Express
const server = express()
server.use(express.static('public'))


    // Configurar template Engine
.set('views', path.join(__dirname, "views"))

.set('view engine', 'hbs')

// Rotas das aplicações
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)





// Ligar servidor
server.listen(5500)

