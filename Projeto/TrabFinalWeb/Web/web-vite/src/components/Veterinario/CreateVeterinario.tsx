import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";
import './Botoes.css'; // Importe o arquivo de estilo para os formulários

const CreateVeterinario = () => {
    const [nome, setNome] = useState('');
    const [Especialidade, setEspecialidade] = useState('');
    const [Contato, setContato] = useState('');
    const navigate = useNavigate();

    const handleNewVeterinario = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            nome,
            Especialidade,
            Contato
        };

        try {
            await api.post('/veterinarios', data);
            alert("Veterinário inserido com sucesso!");
            navigate('/veterinarios');
        } catch (error) {
            console.error("Erro na inserção do veterinário:", error);
            alert("Erro na inserção do veterinário!");
        }
    };

    return (
        <div className="create-container">
            <div className="form-container">
                <h3>Cadastro de Veterinário</h3>
                <form onSubmit={handleNewVeterinario}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="especialidade">Especialidade</label>
                        <input
                            type="text"
                            name="especialidade"
                            id="especialidade"
                            value={Especialidade}
                            onChange={(e) => setEspecialidade(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contato">Contato</label>
                        <input
                            type="text"
                            name="contato"
                            id="contato"
                            value={Contato}
                            onChange={(e) => setContato(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit-button">Cadastrar</button>
                    <button type="reset" className="reset-button">Limpar</button>
                </form>
            </div>
        </div>
    );
};

export default CreateVeterinario;
