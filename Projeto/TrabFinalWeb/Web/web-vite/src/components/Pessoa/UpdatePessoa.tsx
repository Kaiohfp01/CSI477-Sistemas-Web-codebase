import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/Api";

const UpdatePessoa = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [contato, setContato] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        api.get(`/pessoa/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setIdade(String(response.data.idade));
                setSexo(response.data.sexo);
                setContato(response.data.contato);
            })
            .catch(error => {
                console.error('Erro ao obter a pessoa:', error);
            });
    }, [id]);

    const handleUpdatePessoa = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            id: parseInt(String(id)),
            nome,
            idade: Number(idade),
            sexo,
            contato
        };

        try {
            await api.put('/pessoa', data);
            alert("Pessoa atualizada com sucesso!");
            navigate('/pessoas');
        } catch (error) {
            console.error(error);
            alert("Erro na atualização da Pessoa!");
        }
    };

    return (
        <div className="form-container">
            <h3>Atualização de Pessoa: {nome}</h3>
            <form onSubmit={handleUpdatePessoa}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="idade">Idade</label>
                    <input type="number"
                        name="idade"
                        id="idade"
                        value={idade}
                        onChange={e => setIdade(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="sexo">Sexo</label>
                    <input type="text"
                        name="sexo"
                        id="sexo"
                        value={sexo}
                        onChange={e => setSexo(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="contato">Contato</label>
                    <input type="text"
                        name="contato"
                        id="contato"
                        value={contato}
                        onChange={e => setContato(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Atualizar</button>
                <button type="reset" className="reset-button">Limpar</button>
            </form>
        </div>
    );
};

export default UpdatePessoa;
