import { prisma } from "../../database/client.js";

export class UpdatePessoasController {
    async handle(request, response) {
        try {
            const { id, nome, rua, complemento, numero, rg, cidade_id, tipo_id } = request.body;

            const Pessoas = await prisma.pessoas.update({
                where: { 
                    id: parseInt(id) 
                },
                data: 
                {
                nome,
                rua,
                complemento,
                numero,
                rg,
                cidades: {
                    connect: {
                        id: cidade_id
                    }
                },
                tipo_sanguineo: { 
                    connect: {
                         id: tipo_id } } 
            }
        });

        return response.json(Pessoas);
    } catch (error) {
        console.error('Erro ao atualizar pessoa:', error);
        return response.status(500).json({ error: 'Erro ao atualizar pessoa' });
    }
}
}