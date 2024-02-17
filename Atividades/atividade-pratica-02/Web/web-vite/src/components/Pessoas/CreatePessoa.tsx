import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";
import { TipoSanguineoInterface } from "../TipoSanguineo/ListTipoSanguineo";
import { CidadeInterface } from "../cidades/ListCidades";
import './Estilo.css'; // Importa os estilos CSS



const CreatePessoa = () => {
    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [rg, setRg] = useState('');
    const [cidadeId, setCidadeId] = useState(0);
    const [tipoId, setTipoId] = useState(0);
    const [TipoS, setTipoS] = useState <TipoSanguineoInterface[]>([]);
    const [cidades, setCidades] = useState <CidadeInterface[]>([]);

    const navigate = useNavigate();


    useEffect(() => {
        api.get('/tipos-sanguineos')
        .then(response =>{
            setTipoS(response.data);
        })
    },[]);
    
    useEffect(() => {
        api.get('/cidades')
        .then(response =>{
            setCidades(response.data);
        })
    },[])
    const handleNewPessoa = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        const data = {
            nome,
            rua,
            numero,
            complemento,
            rg,
            cidade_id: cidadeId,
            tipo_id: tipoId
        };

        try {
            await api.post('/pessoas', data);
            alert("Pessoa inserida com sucesso!");
            navigate('/pessoas');
        } catch (error) {
            console.error(error);
            alert("Erro na inserção da Pessoa! ");
        }
    }

    return (
        <div>
            <h3>Cadastro de Pessoa: {nome}</h3>
            <form onSubmit={handleNewPessoa}>
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
                    <label htmlFor="rua">Rua</label>
                    <input
                        type="text"
                        name="rua"
                        id="rua"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="numero">Número</label>
                    <input
                        type="text"
                        name="numero"
                        id="numero"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="complemento">Complemento</label>
                    <input
                        type="text"
                        name="complemento"
                        id="complemento"
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="rg">RG</label>
                    <input
                        type="text"
                        name="rg"
                        id="rg"
                        value={rg}
                        onChange={(e) => setRg(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="cidadeId">ID da Cidade</label>
                    <select
                        name="cidadeId"
                        id="cidadeId"
                        onChange={e => setCidadeId(parseInt(e.target.value))}>
                        <option value= "0" selected>Selecione</option>
                        {
                              cidades.map ( Tipos =>(
                                <option value= {Tipos.id}>{Tipos.id}{Tipos.nome}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="tipoId">ID do Tipo Sanguíneo</label>
                    <select
                        name="tipoId"
                        id="tipoId"
                        onChange={e => setTipoId(parseInt(e.target.value))}>
                        <option value= "0" selected>Selecione</option>
                        {
                              TipoS.map ( Tipos =>(
                                <option value= {Tipos.id}>{Tipos.tipo}{Tipos.fator}</option>
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

export default CreatePessoa;
