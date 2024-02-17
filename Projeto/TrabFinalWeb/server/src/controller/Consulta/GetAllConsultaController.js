import { prisma } from '../../database/client.js';

export class GetAllConsultaController {
    async handle(request, response) {
        try {
            const consultas = await prisma.consulta.findMany();
            
            return response.json(consultas);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao obter todas as consultas.' });
        }
    }
}
