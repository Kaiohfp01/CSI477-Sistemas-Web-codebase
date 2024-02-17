import { prisma } from '../../database/client.js';

export class GetByIdConsultaController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            const consulta = await prisma.consulta.findUnique({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(consulta);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao obter consulta.' });
        }
    }
}
