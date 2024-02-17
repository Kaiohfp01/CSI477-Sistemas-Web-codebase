import { prisma } from "../../database/client.js";

export class CreateEstadosController{

    async handle(request,response){
        // request.body -> JSON
        console.log(request.body)
        const { nome, sigla } = request.body
        
        // Validações: model, DTO, Parser, ...
        if(nome === ""){
            return response.status(400).json({
                massage: 'Invalid  data. Nome and Sigla are required.'
            })
        }

        // Sanitização(Modificar/Limpar os dados para ver se eles são validos. EX: A data deve estar nesse formato 09-08-2001, logo faremos isso)
        // ...


        // Persistencia dos dados -> Model
        const estado = await prisma.estado.create({
            data: {
                nome,
                sigla
            }
        })

        return response.json(estado)
    }

}

