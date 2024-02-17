import { prisma } from "../../database/client.js";

export class GetByIdPessoaController {

    async handle(request, response) {
        try {
            const { id } = request.params;
            const pessoas = await prisma.pessoa.findUnique({
                where: {
                    id: parseInt(id)
                }
            });
 
            return response.json(pessoas);
        } catch (error) {
            console.error('Erro ao obter usuário por ID:', error);
            return response.status(500).json({ error: 'Erro ao obter usuário por ID' });
        }
    }
}