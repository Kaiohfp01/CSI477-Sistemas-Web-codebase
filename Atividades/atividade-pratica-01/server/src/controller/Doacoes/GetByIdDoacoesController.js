import { prisma } from "../../database/client.js";

export class GetByIdDoacoesController {
async handle(request, response) {
    const { id } = request.params;

    try {
        // Recuperar uma doação por ID
        const doacao = await prisma.doacoes.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return response.json(doacao);
    } catch (error) {
        console.error('Erro ao recuperar doação por ID:', error);
        return response.status(500).json({ message: 'Erro interno do servidor.' });
    }
}
}
