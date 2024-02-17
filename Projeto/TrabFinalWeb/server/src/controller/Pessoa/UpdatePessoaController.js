import { prisma } from '../../database/client.js';

export class UpdatePessoaController {
    async handle(request, response) {

        const { id, nome, idade, sexo, contato } = request.body;

        try {

            const pessoas = await prisma.pessoa.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    idade,
                    sexo,
                    contato,
                }
            });

            return response.json(pessoas);
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            return response.status(400).json({ error: 'Erro ao atualizar usuário' });
        }
    }
}
