import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";
import { CidadeInterface } from "../cidades/ListCidades";
import './Estilo.css'; // Importa os estilos CSS


const CreateLocalColeta = () => {
    const [cidadeId, setCidadeId] = useState(0);
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidades, setCidades] = useState <CidadeInterface[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        api.get('/cidades')
        .then(response =>{
            setCidades(response.data);
        })
    },[])

    const handleNewLocalColeta = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            cidade_id: cidadeId,
            rua,
            numero,
            complemento
        };

        try {
            await api.post('/LocaisColeta', data);
            alert("Local de coleta cadastrado com sucesso!");
            navigate('/locais_coleta');
        } catch (error) {
            console.error(error);
            alert("Erro no cadastro do local de coleta!");
        }
    };

    return (
        <div>
            <h3>Cadastro de Local de Coleta</h3>
            <form onSubmit={handleNewLocalColeta}>
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
                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    );
};

export default CreateLocalColeta;
