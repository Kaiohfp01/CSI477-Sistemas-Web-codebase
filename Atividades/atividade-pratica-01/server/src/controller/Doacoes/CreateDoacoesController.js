import { prisma } from "../../database/client.js";

export class CreateDoacoesController {

    async handle(request, response) {
        const { pessoa_Id, local_Id, data } = request.body;

        try {
            // Persistência dos dados
            const doacao = await prisma.doacoes.create({
                data: {
                    pessoa_Id,
                    local: {
                        connect : {
                            id : local_Id
                        }
                    },
                    data
                }
            });

            return response.json(doacao);
        } catch (error) {
            console.error('Erro ao criar doação:', error);
            return response.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
}