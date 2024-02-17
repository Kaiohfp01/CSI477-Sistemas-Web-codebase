import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../services/Api";
import { CidadeInterface } from "../cidades/ListCidades";
import './Estilo.css'; // Importa os estilos CSS


const UpdateLocalColetas = () => {
    const [cidadeId, setCidadeId] = useState(0);
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [cidades, setCidades] = useState<CidadeInterface[]>([]);

    useEffect(() => {
        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar cidades:", error);
            });
    }, []);

    useEffect(() => {
        api.get(`/LocaisColeta/${id}`)
            .then(response => {
                setCidadeId(response.data.cidade_id);
                setRua(response.data.rua);
                setNumero(response.data.numero);
                setComplemento(response.data.complemento);
            })
            .catch(error => {
                console.error("Erro ao buscar local de coleta:", error);
            });
    }, [id]);

    const handleUpdateLocalColeta = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            id,
            cidade_id: cidadeId,
            rua,
            numero,
            complemento
        };

        try {
            await api.put('/LocaisColeta', data);
            alert("Local de coleta atualizado com sucesso!");
            navigate('/locais_coleta');
        } catch (error) {
            console.error("Erro na atualização do local de coleta:", error);
            alert("Erro na atualização do local de coleta!");
        }
    };

    return (
        <div>
            <h3>Atualização de Local de Coleta</h3>
            <form onSubmit={handleUpdateLocalColeta}>
                <div>
                    <label htmlFor="cidadeId">ID da Cidade</label>
                    <select
                        name="cidadeId"
                        id="cidadeId"
                        value={cidadeId}
                        onChange={(e) => setCidadeId(parseInt(e.target.value))}>
                        <option value="0">Selecione</option>
                        {cidades.map(cidade => (
                            <option key={cidade.id} value={cidade.id}>{cidade.nome}</option>
                        ))}
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
                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>
                <Link to="/locais_coleta">Voltar</Link>
            </form>
        </div>
    );
}

export default UpdateLocalColetas;
