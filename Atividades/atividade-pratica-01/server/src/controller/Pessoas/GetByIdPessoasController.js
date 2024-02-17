import { prisma } from "../../database/client.js";

export class GetByIdPessoasController {

async handle(request, response) {
    try {
        const { id } = request.params;

        const Pessoas = await prisma.pessoas.findUnique({
            where: { 
                id: parseInt(id) }
        });

        return response.json(Pessoas);
    } catch (error) {
        console.error('Erro ao buscar pessoa por ID:', error);
        return response.status(500).json({ error: 'Erro ao buscar pessoa por ID' });
    }
}
}