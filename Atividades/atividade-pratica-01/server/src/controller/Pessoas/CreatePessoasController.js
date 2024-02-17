import { prisma } from "../../database/client.js";

export class CreatePessoasController {
    async handle(request, response) {
        console.log(request.body)
        const {nome, rua,complemento, numero,rg,cidade_id,tipo_id} = request.body
        try {
            const pessoa = await prisma.pessoas.create({
                data: {
                    nome,
                    rua,
                    complemento,
                    numero,
                    rg,
                    cidades: { connect: { id: cidade_id} }, // Conecta com a cidade pelo ID
                    tipo_sanguineo: { connect: { id: tipo_id } } // Conecta com o tipo sanguíneo pelo ID
                }
            });
            console.log('Nova pessoa criada:', pessoa);
            return response.json(pessoa);
        } catch (error) {
            console.error('Erro ao criar pessoa:', error);
            return response.status(500).json({ message: 'Erro ao criar pessoa' });
        }
    }
}
