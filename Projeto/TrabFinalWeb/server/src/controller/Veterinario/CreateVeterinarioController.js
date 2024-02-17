import { prisma } from '../../database/client.js';

export class CreateVeterinarioController {
    async handle(request, response) {
        const { nome,Especialidade, Contato } = request.body;

        try {
            const veterinario = await prisma.veterinario.create({
                data: {
                    nome,
                    Especialidade,
                    Contato
                }
            });

            return response.json(veterinario);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao criar veterinário.' });
        }
    }
}
