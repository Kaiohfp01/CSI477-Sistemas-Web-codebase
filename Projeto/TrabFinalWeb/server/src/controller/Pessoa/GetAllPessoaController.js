import { prisma } from "../../database/client.js";

export class GetAllPessoaController {

    async handle(request, response) {
        try {
            const pessoas = await prisma.pessoa.findMany();
            
            return response.json(pessoas);
        } catch (error) {
            console.error('Erro ao obter todos os usuários:', error);
            return response.status(500).json({ error: 'Erro ao obter todos os usuários' });
        }
    }
}
