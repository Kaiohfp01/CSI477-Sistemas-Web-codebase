import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";
import './BotoesPessoa.css'; // Importar o arquivo de estilos CSS

const CreatePessoa = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [contato, setContato] = useState('');
    const navigate = useNavigate();

    const handleNewPessoa = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            nome,
            idade: Number(idade), // Convertendo para número
            sexo,
            contato
        };

        try {
            await api.post('/pessoa', data);
            alert("Pessoa inserida com sucesso!");
            navigate('/pessoas');
        } catch (error) {
            console.error(error);
            alert("Erro na inserção da Pessoa!");
        }
    };

    return (
        <div className="create-container">
            <div className="form-container">
                <h3>Cadastro de Pessoa: {nome}</h3>
                <form onSubmit={handleNewPessoa}>
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
                    <button type="submit" className="submit-button">Cadastrar</button>
                    <button type="reset" className="reset-button">Limpar</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePessoa;
