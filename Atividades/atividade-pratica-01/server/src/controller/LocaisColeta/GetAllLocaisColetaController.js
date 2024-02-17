import { prisma } from "../../database/client.js";

export class GetAllLocaisColetaController {
async handle(request, response) {
    try {
        // Recuperar todos os locais de coleta
        const locaiscoleta = await  prisma.localColeta.findMany();
        
        return response.json(locaiscoleta);
    } catch (error) {
        console.error('Erro ao recuperar locais de coleta:', error);
        return response.status(500).json({ message: 'Erro interno do servidor.' });
    }
}
}