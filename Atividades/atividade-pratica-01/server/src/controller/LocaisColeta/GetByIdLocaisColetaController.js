import { prisma } from "../../database/client.js";

export class GetByIdLocaisColetaController {
async handle(request, response) {
    const { id } = request.params;

    try {
        // Recuperar um local de coleta por ID
        const localColeta = await prisma.localColeta.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return response.json(localColeta);
    } catch (error) {
        console.error('Erro ao recuperar local de coleta por ID:', error);
        return response.status(500).json({ message: 'Erro interno do servidor.' });
    }
}
}