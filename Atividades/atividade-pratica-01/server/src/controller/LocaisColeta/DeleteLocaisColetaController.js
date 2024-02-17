import { prisma } from "../../database/client.js";

export class DeleteLocaisColetaController {

async handle(request, response) {
    const { id } = request.body;

    try {
        // Exclusão do local de coleta
        const LocaisColeta = await prisma.localColeta.delete({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(LocaisColeta);
    } catch (error) {
        console.error('Erro ao excluir local de coleta:', error);
        return response.status(500).json({ message: 'Erro interno do servidor.' });
    }
}
}