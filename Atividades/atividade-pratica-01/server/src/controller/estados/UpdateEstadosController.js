import { prisma } from "../../database/client.js";


export class UpdateEstadosController{

    async handle(request,response){
        const { id, nome, sigla } = request.body

        const estado = await prisma.estado.update({
            // Atualizamos o Nome e a Sigla para aquele Id.
            where:{
                id
            },
            data: {
                nome,
                sigla
            }
        })

        return response.json(estado)
    }
}