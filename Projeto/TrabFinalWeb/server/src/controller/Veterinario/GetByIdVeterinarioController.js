import { prisma } from '../../database/client.js';

export class GetByIdVeterinarioController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            const veterinario = await prisma.veterinario.findUnique({
                where: {
                    id: parseInt(id)
                },
            });
            return response.json(veterinario);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao obter veterinário.' });
        }
    }
}
