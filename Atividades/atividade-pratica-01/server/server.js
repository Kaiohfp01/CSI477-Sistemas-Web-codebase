// Utilizamos o nodemon(npm install -D nodemon)

import express, { request, response } from 'express'
import { prisma } from './src/database/client.js'
import { estadoRouter } from './src/routes/estados.js'
import { locaisColetaRouter} from './src/routes/LocaisColeta.js'
import { doacoesRouter } from './src/routes/Doacoes.js'
import { pessoasRouter } from './src/routes/Pessoas.js'
import { tiposSanguineosRouter } from './src/routes/TiposSanguineos.js'
import cors from "cors"
import { cidadeRouter } from './src/routes/Cidades.js'

const server = express()
const PORT = 5000

// Routes
server.get('/', (request, response) => {
    response.json({
        message: 'Status: Server is running.'
    })
})

// Faz o tratamento dos dados
server.use(express.json())
server.use(cors())
// Faz o filtro das rotas
server.use(estadoRouter)

server.use(express.json())
server.use(locaisColetaRouter)

server.use(express.json())
server.use(doacoesRouter)

server.use(express.json())
server.use(pessoasRouter)

server.use(express.json())
server.use(tiposSanguineosRouter)

server.use(express.json())
server.use(cidadeRouter)


/* Rota para o /estados
server.get('/estados', async (request,response) => {
    const estados = await prisma.estado.findMany()
    return response.json(estados);
})
*/

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})