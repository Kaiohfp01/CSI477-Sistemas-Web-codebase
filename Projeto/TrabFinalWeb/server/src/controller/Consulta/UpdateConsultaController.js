import { prisma } from '../../database/client.js';

export class UpdateConsultaController {
    async handle(request, response) {
        const { id, data, motivo, medicamentos, veterinarioId } = request.body;

        try {
            const consulta = await prisma.consulta.update({
                where: {
                    id: parseInt(id)
                },
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
            });

            return response.json(consulta);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao atualizar consulta.' });
        }
    }
}
