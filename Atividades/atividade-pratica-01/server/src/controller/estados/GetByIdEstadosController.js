import { prisma } from "../../database/client.js";


export class GetByIdEstadosController{

    async handle(request,response){
        // Há tres formas de se fazer:
        // Forma GET:
        // /estados/1: request.params -> /estados/{id}
        // /estados/?id=1: request.query
        // Forma POST: 
        // request.body

        const { id } = request.params

        try{

            const estado = await prisma.estado.findUniqueOrThrow({
                where:{
                    id: parseInt(id)
                }
            })
    
            return response.json(estado)

        }catch (error){

            response.status(400).json({
                message: 'Invalid Request.',
                error
            })

        }

    }

}