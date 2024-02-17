import { prisma } from "../../database/client.js";

export class GetByIdTiposSanguineosController {

    async handle(request, response) {
       
        const { id } = request.params;
        try {
        
            const tipoSanguineo = await prisma.tipos_Sanguineos.findUniqueOrThrow({
                where: { 
                    id: parseInt(id)
                }
            });

            return response.json(tipoSanguineo);
        } catch (error) {
            console.error('Erro ao buscar tipo sanguíneo por ID:', error);
            return response.status(500).json({ error: 'Erro ao buscar tipo sanguíneo por ID' });
        }
    }

}