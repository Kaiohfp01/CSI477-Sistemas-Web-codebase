import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/Api";

const UpdatePet = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [raca, setRaca] = useState('');
    const [especie, setEspecie] = useState('');
    const [sexo, setSexo] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        api.get(`/pets/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setIdade(response.data.idade);
                setRaca(response.data.raca);
                setEspecie(response.data.especie);
                setSexo(response.data.sexo);
            })
            .catch(error => {
                console.error("Erro ao carregar os dados do pet:", error);
            });
    }, [id]);

    const handleUpdatePet = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            id: parseInt(String(id)),
            nome,
            idade,
            raca,
            especie,
            sexo
        };

        try {
            await api.put('/pets', data);
            alert("Pet atualizado com sucesso!");
            navigate('/pets');
        } catch (error) {
            console.error(error);
            alert("Erro na atualização do Pet!");
        }
    }

    return (
        <div>
            <h3>Atualização de Pet: {nome}</h3>
            <form onSubmit={handleUpdatePet}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="idade">Idade</label>
                    <input
                        type="number"
                        name="idade"
                        id="idade"
                        value={idade}
                        onChange={e => setIdade(parseInt(e.target.value))}
                    />
                </div>

                <div>
                    <label htmlFor="raca">Raça</label>
                    <input
                        type="text"
                        name="raca"
                        id="raca"
                        value={raca}
                        onChange={e => setRaca(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="especie">Espécie</label>
                    <input
                        type="text"
                        name="especie"
                        id="especie"
                        value={especie}
                        onChange={e => setEspecie(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="sexo">Sexo</label>
                    <input
                        type="text"
                        name="sexo"
                        id="sexo"
                        value={sexo}
                        onChange={e => setSexo(e.target.value)}
                    />
                </div>

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    );
}

export default UpdatePet;
