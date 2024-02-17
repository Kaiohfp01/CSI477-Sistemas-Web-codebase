import { prisma } from '../../database/client.js';

export class CreatePessoaController {
    async handle(request, response) {
        const { nome, idade, sexo, contato } = request.body;
        try {

            const pessoas = await prisma.pessoa.create({
                data: {
                    nome,
                    idade: Number(idade),
                    sexo,
                    contato
                },
            });

            return response.json(pessoas);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return response.status(500).json({ error: 'Erro ao criar usuário' });
        }
    }
}
