import { prisma } from "../../database/client.js";

export class DeleteDoacoesController {

async handle(request, response) {
    const { id } = request.body;

    try {
        const doacao = await prisma.doacoes.delete({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(doacao);
    } catch (error) {
        console.error('Erro ao excluir doação:', error);
        return response.status(500).json({ message: 'Erro interno do servidor.' });
    }
}
}