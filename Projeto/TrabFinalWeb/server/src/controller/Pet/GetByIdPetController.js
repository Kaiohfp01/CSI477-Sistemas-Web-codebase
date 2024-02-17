export class GetByIdPetController {
    async handle(request, response) {
        const { id } = request.params;

        try {
            const pet = await prisma.pet.findUnique({
                where: {
                    id: parseInt(id)
                },
            });

            if (!pet) {
                return response.status(404).json({ error: 'Pet não encontrado.' });
            }

            return response.json(pet);
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: 'Erro ao obter o pet.' });
        }
    }
}