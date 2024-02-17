// Utilizamos o nodemon(npm install -D nodemon)

import express, { request, response } from 'express'
import { prisma } from './src/database/client.js'

import cors from "cors"
import { consultaRouter } from './src/routes/Consulta.js'
import { petRouter } from './src/routes/Pet.js'
import { veterinarioRouter } from './src/routes/Veterinario.js'
import { userRouter } from './src/routes/User.js'
import { PessoaRouter } from './src/routes/Pessoa.js'


const server = express()
const PORT = process.env.PORT || 5000;

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
server.use(express.json())
server.use(consultaRouter)

server.use(express.json())
server.use(petRouter)

server.use(express.json())
server.use(PessoaRouter)

server.use(express.json())
server.use(veterinarioRouter)

server.use(express.json())
server.use(userRouter)
/* Rota para o /estados
server.get('/estados', async (request,response) => {
    const estados = await prisma.estado.findMany()
    return response.json(estados);
})
*/

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`)
})