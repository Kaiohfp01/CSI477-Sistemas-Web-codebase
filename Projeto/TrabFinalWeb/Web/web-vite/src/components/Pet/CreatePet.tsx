import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";
import { PessoaInterface } from "../Pessoa/ListPessoa";
import './EstiloPet.css'; // Importando o arquivo de estilos CSS

const CreatePet = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [raca, setRaca] = useState('');
    const [especie, setEspecie] = useState('');
    const [sexo, setSexo] = useState('');
    const [donoId, setDonoId] = useState(0);
    const navigate = useNavigate();
    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);
    

     
    useEffect(() => {
        api.get('/pessoa')
        .then(response =>{
            setPessoas(response.data);
        })
    },[]);

    const handleNewPet = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            nome,
            idade,
            raca,
            especie,
            sexo,
            dono_id: donoId
        };
        try {
            await api.post('/pets', data);
            alert("Pet cadastrado com sucesso!");
            navigate('/pets');
        } catch (error) {
            console.error(error);
            alert("Erro no cadastro do Pet!");
        }
    };

    return (
        <div className="create-container">
            <div className="form-container">
                <h3>Cadastro de Pet: {nome}</h3>
                <form onSubmit={handleNewPet}>
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
                            onChange={e => setIdade(Number(e.target.value))}
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
                        >
                          
                        </input>
                    </div>

                    <div className="form-group"> {/* Adiciona a classe form-group */}
                        <label htmlFor="donoId">Dono</label>
                        <select 
                        name="donoID" 
                        id="donoId"
                        onChange={e => setDonoId(parseInt(e.target.value)) }>

                        <option  value ="0" selected>Selecione:</option>

                        {
                            pessoas.map ( estado =>(
                                <option value= {estado.id}>{estado.nome}</option>
                            ))
                        }
                        </select>
                    </div>

                    <button type="submit" className="submit-button">Cadastrar</button>
                    <button type="reset" className="reset-button">Limpar</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePet;
