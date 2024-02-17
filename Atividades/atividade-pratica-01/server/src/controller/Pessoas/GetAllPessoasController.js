import { prisma } from "../../database/client.js";

export class GetAllPessoasController {
async handle(request, response) {
    try {
        const Pessoas = await prisma.pessoas.findMany();

        return response.json(Pessoas);
    } catch (error) {
        console.error('Erro ao buscar todas as pessoas:', error);
        return response.status(500).json({ error: 'Erro ao buscar todas as pessoas' });
    }
}
}