import { prisma } from '../../database/client.js';

export class CreatePetController {
    async handle(request, response) {
        const { nome, idade, raca, especie, sexo, dono_id } = request.body;

        try {
            const pet = await prisma.pet.create({
                data: {
                    nome,
                    idade,
                    raca,
                    especie,
                    sexo,
                    dono: {
                        connect: { id: dono_id }
                    }
                }
            });

            return response.json(pet);
        } catch (error) {
            console.error("Erro ao criar pet:", error);
            return response.status(500).json({ error: "Erro ao criar pet" });
        }
    }
}
