import { prisma } from "../../database/client.js";

export class DeletePessoasController {
    async handle(request, response) {
        try {
            const { id } = request.body;

            const Pessoas = await prisma.pessoas.delete({
                where: { 
                    id: parseInt(id)
                }
            });

            return response.json(Pessoas);
        } catch (error) {
            console.error('Erro ao deletar pessoa:', error);
            return response.status(500).json({ error: 'Erro ao deletar pessoa' });
        }
    }

}