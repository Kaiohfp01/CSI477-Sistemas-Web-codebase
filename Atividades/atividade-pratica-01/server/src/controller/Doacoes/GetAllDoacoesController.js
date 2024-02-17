import { prisma } from "../../database/client.js";

export class GetAllDoacoesController {

    async handle(request, response) {
        try {
            // Recuperar todas as doações
            const doacao = await prisma.doacoes.findMany();
            return response.json(doacao);
        } catch (error) {
            console.error('Erro ao recuperar doações:', error);
            return response.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
}