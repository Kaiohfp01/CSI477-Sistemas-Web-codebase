import { prisma } from "../../database/client.js";

export class GetAllTiposSanguineosController {

    async handle(request, response) {
        try {
            const tiposSanguineos = await prisma.tipos_Sanguineos.findMany();

            return response.json(tiposSanguineos);
        } catch (error) {
            console.error('Erro ao buscar todos os tipos sanguíneos:', error);
            return response.status(500).json({ error: 'Erro ao buscar todos os tipos sanguíneos' });
        }
    }
}
