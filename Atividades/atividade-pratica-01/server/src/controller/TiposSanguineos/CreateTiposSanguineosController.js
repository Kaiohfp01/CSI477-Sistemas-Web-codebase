import { prisma } from "../../database/client.js";

export class CreateTiposSanguineosController {
    async handle(request, response) {
        try {
            const { tipo, fator } = request.body;

            const tipoSanguineo = await prisma.tipos_Sanguineos.create({
                data: {
                    tipo,
                    fator
                }
            });

            return response.json(tipoSanguineo);
        } catch (error) {
            console.error('Erro ao criar tipo sanguíneo:', error);
            return response.status(500).json({ error: 'Erro ao criar tipo sanguíneo' });
        }
    }
}