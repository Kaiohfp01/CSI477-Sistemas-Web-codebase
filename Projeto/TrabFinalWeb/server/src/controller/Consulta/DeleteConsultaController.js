import { prisma } from '../../database/client.js';

export class DeleteConsultaController {
    async handle(request, response) {
        const { id } = request.body;

        try {
            const consulta = await prisma.consulta.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(consulta);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao excluir consulta.' });
        }
    }
}
