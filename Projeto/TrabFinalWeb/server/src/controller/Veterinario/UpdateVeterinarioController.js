import { prisma } from '../../database/client.js';

export class UpdateVeterinarioController {
    async handle(request, response) {
        const { id, nome, Especialidade, Contato } = request.body;

        try {
            const veterinario = await prisma.veterinario.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    Especialidade,
                    Contato
                }
            });

            return response.json(veterinario);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao atualizar veterinário.' });
        }
    }
}
