import { prisma } from "../../database/client.js";

export class UpdateLocaisColetaController {
    async handle(request, response) {
        const {id, nome, rua, complemento, cidade_id} = request.body;


        try {
            // Atualização do local de coleta
            const localColeta = await prisma.localColeta.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    rua,
                    complemento,
                    cidade:  { 
                        connect: {
                             id: cidade_id
                            }
                         }
                }
            });

            return response.json(localColeta);
        } catch (error) {
            console.error('Erro ao atualizar local de coleta:', error);
            return response.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }

}