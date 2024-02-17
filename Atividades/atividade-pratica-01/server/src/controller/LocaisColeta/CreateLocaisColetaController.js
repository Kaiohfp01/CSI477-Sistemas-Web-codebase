import { prisma } from "../../database/client.js";

export class CreateLocaisColetaController {

    async handle(request, response) {
        const { cidade_id, numero, rua, complemento } = request.body;


        // Sanitização
        // Se necessário, adicione qualquer lógica de sanitização aqui

        try {
            // Persistência dos dados
            const localColeta = await prisma.localColeta.create({
                data: {
                    numero,
                    rua,
                    complemento,
                    cidade:  { 
                        connect: {
                             id: cidade_id
                            }
                         }
                    }
            });

            return response.json(localColeta);
        } catch (error) {
            console.error('Erro ao criar local de coleta:', error);
            return response.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
}
