import { prisma } from '../../database/client.js';

export class GetAllVeterinarioController {
   
    async handle(request, response) {
        try {
            const veterinarios = await prisma.veterinario.findMany();

            return response.json(veterinarios);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao obter todos os veterinários.' });
        }
    }
}
