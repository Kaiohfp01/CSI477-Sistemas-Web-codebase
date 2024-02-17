import { prisma } from "../../database/client.js";

export class UpdateDoacoesController {

async handle(request, response) {

    const { id, pessoaId, localId, data } = request.body;

    try {
        // Atualização da doação
        const doacao = await prisma.doacoes.update({
            where: {
                id: parseInt(id)
            },
            data: {
                pessoaId,
                local: {
                    connect : {
                        id : localId
                    }
                },                
                data
            }
        });

        return response.json(doacao);
    } catch (error) {
        console.error('Erro ao atualizar doação:', error);
        return response.status(500).json({ message: 'Erro interno do servidor.' });
    }
}
}