import { prisma } from '../../database/client.js';

export class CreateConsultaController {
    async handle(request, response) {
        const { data, motivo, medicamentos, veterinarioId} = request.body;

        try {
            const consulta = await prisma.consulta.create({
                data: {
                    data,
                    motivo,
                    medicamentos,
                    veterinario: {
                        connect: {
                            id: veterinarioId
                        }
                    }
                    }
                }
            );

            return response.json(consulta);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao criar consulta.' });
        }
    }
}
