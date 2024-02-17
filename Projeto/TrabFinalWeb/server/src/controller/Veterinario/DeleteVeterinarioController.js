import { prisma } from '../../database/client.js';

export class DeleteVeterinarioController {
    async handle(request, response) {
        const { id } = request.body;

        try {
            const veterinario = await prisma.veterinario.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(veterinario);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao excluir veterinário.' });
        }
    }
}
