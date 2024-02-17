import { prisma } from '../../database/client.js';

export class DeletePetController {
    async handle(request, response) {
        const { id } = request.body;

        try {
            const pet = await prisma.pet.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(pet);
        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
