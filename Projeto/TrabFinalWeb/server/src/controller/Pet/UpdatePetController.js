import { prisma } from '../../database/client.js';

export class UpdatePetController {
    async handle(request, response) {
        const { id, nome, idade, raca, especie, sexo, dono_id } = request.body;

        try {
            const pet = await prisma.pet.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    idade,
                    raca,
                    especie,
                    sexo,
                    dono: {
                        connect: {
                            id : dono_id
                        }
                    }
                }
            });

            return response.json(pet);
        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}
