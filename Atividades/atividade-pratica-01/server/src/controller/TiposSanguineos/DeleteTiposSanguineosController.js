import { prisma } from "../../database/client.js";

export class DeleteTiposSanguineosController {

    async handle(request, response) {
        const { id } = request.body;
        try {

            const deletedTipoSanguineo = await prisma.tipos_Sanguineos.delete({
                where: { 
                    id 
                }
            });

            return response.json(deletedTipoSanguineo);
        } catch (error) {
            console.error('Erro ao deletar tipo sanguíneo:', error);
            return response.status(500).json({ error: 'Erro ao deletar tipo sanguíneo' });
        }
    }
}