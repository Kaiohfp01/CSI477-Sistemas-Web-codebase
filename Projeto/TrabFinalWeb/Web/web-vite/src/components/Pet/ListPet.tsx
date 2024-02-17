import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/Api";
import './EstiloPet.css'; // Importar o arquivo de estilos CSS

export interface PetInterface {
    id: number;
    nome: string;
    idade: number;
    raca: string;
    especie: string;
    sexo: string;
}

const ListPets = () => {
    const [pets, setPets] = useState<PetInterface[]>([]);

    useEffect(() => {
        api.get('/pets')
            .then(response => {
                console.log(response.data);
                setPets(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar os pets:", error);
            });
    }, []);

    const handleDeletePet = async (id: number) => {
        if (!window.confirm("Confirma a exclusão do pet?")) {
            return;
        }

        try {
            await api.delete('/pets', {
                data: {
                    id
                }
            });

            alert("Pet excluído com sucesso!");
            setPets(pets.filter(pet => pet.id !== id));
        } catch (error) {
            alert("Erro na exclusão do pet!");
            console.error(error);
        }
    }

    return (
        <div>
            <h2>Lista de Pets</h2>

            <div>
                <Link to="/">Voltar</Link>
            </div>
            <div>
                <Link to="/pets/create">Inserir Pet</Link>
            </div>

            <div className="pets-container"> {/* Alterado para pets-container */}
                {pets.map(pet => (
                    <div className="pet-box" key={pet.id}> {/* Alterado para pet-box */}
                        <h4>{pet.nome}</h4>
                        <p>Idade: {pet.idade}</p>
                        <p>Raça: {pet.raca}</p>
                        <p>Espécie: {pet.especie}</p>
                        <p>Sexo: {pet.sexo}</p>
                        <div>
                            <Link to={`/pets/update/${pet.id}`} className="link-button">Atualizar</Link>
                            <button onClick={() => handleDeletePet(pet.id)} className="delete-button">Excluir</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListPets;
