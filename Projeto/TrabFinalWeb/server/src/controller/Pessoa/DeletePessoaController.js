import { prisma } from '../../database/client.js';

export class DeletePessoaController {
    async handle(request, response) {
        try {
            const { id } = request.body;

            const pessoas = await prisma.pessoa.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(pessoas);
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            return response.status(400).json({ error: 'Erro ao excluir usuário' });
        }
    }
}
