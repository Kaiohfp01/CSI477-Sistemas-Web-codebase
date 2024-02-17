import { prisma } from '../../database/client.js';

export class GetAllPetController {
    async handle(request, response) {
        try {
            const pets = await prisma.pet.findMany();
            return response.json(pets);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao obter todos os pets.' });
        }
    }
}
