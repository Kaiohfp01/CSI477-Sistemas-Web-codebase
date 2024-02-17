import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/Api";
import { LocalColetaInterface } from "../localColeta/ListLocalColeta";
import { PessoaInterface } from "../Pessoas/ListPessoas";
import './Estilo.css'; // Importa os estilos CSS


const UpdateDoacoes = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [pessoaId, setPessoaId] = useState(0);
    const [localId, setLocalId] = useState(0);
    const [data, setData] = useState('');
    const [locaisColeta, setLocaisColeta] = useState<LocalColetaInterface[]>([]);
    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);

    useEffect(() => {
        api.get('/LocaisColeta')
            .then(response => {
                setLocaisColeta(response.data.localcoleta);
            })
            .catch(error => {
                console.error("Erro ao buscar locais de coleta:", error);
            })});
            
    useEffect(() => {
            api.get('/Pessoas')
            .then(response => {
                setPessoas(response.data.pessoas);
            })
            .catch(error => {
                console.error("Erro ao buscar pessoas:", error);
            });
        });


       useEffect(() => {
        api.get(`/Doacoes/${id}`)
            .then(response => {
                setPessoaId(response.data.pessoa_Id);
                setLocalId(response.data.local_Id);
                setData(response.data.datas);
            })
    }, [id]);

    const handleUpdateDoacao = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            id,
            pessoa_Id: pessoaId,
            local_Id: localId,
            data: new Date().toISOString()
        };

        try {
            await api.put('/Doacoes', data);
            alert("Doação atualizada com sucesso!");
            navigate('/doacoes');
        } catch (error) {
            console.error(error);
            alert("Erro ao atualizar a doação!");
        }
    };

    return (
        <div>
            <h3>Atualização de Doação</h3>
            <form onSubmit={handleUpdateDoacao}>
                <div>
                    <label htmlFor="pessoaId">Pessoa</label>
                    <select
                        name="pessoaId"
                        id="pessoaId"
                        onChange={e => setPessoaId(parseInt(e.target.value))}
                        value={pessoaId}
                    >
                        <option value="0">Selecione:</option>
                        {pessoas.map(pessoa => (
                            <option key={pessoa.id} value={pessoa.id}>{pessoa.nome}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="localId">Local de Coleta</label>
                    <select
                        name="localId"
                        id="localId"
                        onChange={e => setLocalId(parseInt(e.target.value))}
                        value={localId}
                    >
                        <option value="0">Selecione:</option>
                        {locaisColeta.map(local => (
                            <option key={local.id} value={local.id}>{local.rua}, {local.numero}, {local.complemento}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="data">Data</label>
                <input type="text"  
                name="data" 
                id="data" 
                value={data}
                onChange={e => setData(e.target.value)}
                />
                </div>
                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    );
}

export default UpdateDoacoes;
