import { prisma } from "../../database/client.js";

export class UpdateTiposSanguineosController {

    async handle(request, response) {
        const { id, tipo, fator } = request.body;

        try {

            const tipoSanguineo = await prisma.tipos_Sanguineos.update({
                where: { 
                    id 
                },
                data: {
                    tipo,
                    fator
                }
            })

            return response.json(tipoSanguineo);
        } catch (error) {
            console.error('Erro ao atualizar tipo sanguíneo:', error);
            return response.status(500).json({ error: 'Erro ao atualizar tipo sanguíneo' });
        }
    }
}
