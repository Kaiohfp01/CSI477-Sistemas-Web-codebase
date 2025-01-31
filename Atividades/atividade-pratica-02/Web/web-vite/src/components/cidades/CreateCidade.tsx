import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";
import { EstadoInterface } from "../estados/ListEstados";
import './Estilo.css'; // Importa os estilos CSS

const CreateCidade = () => {
    const [nome, setNome] = useState('');
    const [estadoId, setEstadoId] = useState(0);

    const [estados, setEstados] = useState <EstadoInterface[]>([]);

    useEffect(() => {
        api.get('/estados')
        .then(response =>{
            setEstados(response.data);
        })
    },[]);

    const navigate = useNavigate();

    const handleNewCidade =  async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            nome,
            estado_id : estadoId
        };
        try{
            await api.post('/cidades' , data);
            alert("Cidade inserida com sucesso!");
            navigate('/cidades');
        }catch (error){
            console.error(error);
            alert("Erro na inserção da Cidade! ");
        }
    }
    return(
        <div className="container"> {/* Adiciona a classe container */}
            <h3>Cadastro de Cidade: {nome} - {estadoId}</h3>
            <form onSubmit={handleNewCidade}>
                <div className="form-group"> {/* Adiciona a classe form-group */}
                    <label htmlFor="nome">Nome</label>
                    <input type="text"  
                    name="nome" 
                    id="nome" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    />
                </div>

                <div className="form-group"> {/* Adiciona a classe form-group */}
                    <label htmlFor="estadoId">Estado</label>
                    <select 
                    name="estadoId" 
                    id="estadoId"
                    onChange={e => setEstadoId(parseInt(e.target.value)) }>

                    <option  value ="0" selected>Selecione:</option>

                    {
                        estados.map ( estado =>(
                            <option value= {estado.id}>{estado.nome}</option>
                        ))
                    }
                    </select>
                </div>
                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    );
}

export default CreateCidade;
