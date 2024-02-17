import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/Api";
import './Botoes.css'; // Importe o arquivo de estilo para os formulários

const UpdateVeterinario = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [nome, setNome] = useState('');
    const [Especialidade, setEspecialidade] = useState('');
    const [Contato, setContato] = useState('');

    useEffect (() => {
        api.get(`/veterinarios/${id}`)
        .then(response =>{
        setNome(response.data.nome);
        setEspecialidade(response.data.sigla);
        setContato(response.data.contato)
        });
    
        },[id])

    const handleUpdateVeterinario = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            id : parseInt(String(id)),
            nome,
            Especialidade,
            Contato
        };

        try {
            await api.put('/veterinarios', data);
            alert("Dados do veterinário atualizados com sucesso!");
            navigate('/veterinarios');
        } catch (error) {
            console.error("Erro ao atualizar dados do veterinário:", error);
            alert("Erro ao atualizar dados do veterinário!");
        }
    };

    return (
        <div>
            <h3>Atualização de Veterinário: {nome}</h3>
            <form onSubmit={handleUpdateVeterinario}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="especialidade">Especialidade</label>
                    <input
                        type="text"
                        name="especialidade"
                        id="especialidade"
                        value={Especialidade}
                        onChange={(e) => setEspecialidade(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="contato">Contato</label>
                    <input
                        type="text"
                        name="contato"
                        id="contato"
                        value={Contato}
                        onChange={(e) => setContato(e.target.value)}
                    />
                </div>
                <button type="submit">Atualizar</button>
                <Link to="/veterinarios">Voltar</Link>
            </form>
        </div>
    );
};

export default UpdateVeterinario;
