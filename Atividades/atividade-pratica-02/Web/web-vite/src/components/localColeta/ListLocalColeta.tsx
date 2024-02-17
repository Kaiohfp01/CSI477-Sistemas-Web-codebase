import { useEffect, useState } from "react";
import api from "../../services/Api";
import { Link } from "react-router-dom";
import './Estilo.css'; // Importa os estilos CSS


export interface LocalColetaInterface {
    id: number;
    cidade_id: number;
    rua: string;
    numero: string;
    complemento: string;
    created_at: string;
    updated_at: string;
}

const ListLocalColetas = () => {
    const [locaisColeta, setLocaisColeta] = useState<LocalColetaInterface[]>([]);

    useEffect(() => {
        api.get('/LocaisColeta')
            .then(response => {
                setLocaisColeta(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar locais de coleta:", error);
            });
    }, []);

    const handleDeleteLocalColeta = async (id: number) => {
        if (!window.confirm("Confirma a exclusão do local de coleta?")) {
            return;
        }

        try {
            await api.delete('/LocaisColeta', {
                data: {
                    id
                }
            });
            alert("Local de coleta excluído com sucesso!");
            setLocaisColeta(locaisColeta.filter(local => local.id !== id));
        } catch (error) {
            alert("Erro na exclusão do local de coleta");
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Lista de Locais de Coleta</h3>
            <div>
                <Link to="/locais_coleta/create">Inserir</Link>
            </div>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Cidade Id</th>
                        <th>Rua</th>
                        <th>Número</th>
                        <th>Complemento</th>
                        <th>Criado</th>
                        <th>Atualizado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {locaisColeta.map(local => (
                        <tr key={local.id}>
                            <td>{local.id}</td>
                            <td>{local.cidade_id}</td>
                            <td>{local.rua}</td>
                            <td>{local.numero}</td>
                            <td>{local.complemento}</td>
                            <td>{local.created_at}</td>
                            <td>{local.updated_at}</td>
                            <td><Link to={`/locais_coleta/update/${local.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => handleDeleteLocalColeta(local.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListLocalColetas;
