import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/Api";
import './Estilo.css'; // Importa os estilos CSS


export interface DoacaoInterface {
    id: number;
    pessoa_Id: number;
    local_Id: number;
    data: string;
    created_at: string;
    updated_at: string;
}

const ListDoacoes = () => {
    const [doacoes, setDoacoes] = useState<DoacaoInterface[]>([]);

    useEffect(() => {
        api.get('/doacoes')
            .then(response => {
                setDoacoes(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar doações:", error);
            });
    }, []);

    const handleDeleteDoacao = async (id: number) => {
        if (!window.confirm("Confirma a exclusão da doação?")) {
            return;
        }

        try {
            await api.delete('/Doacoes', {
                data: {
                    id
                }
            });
            alert("Doação excluída com sucesso!");
            setDoacoes(doacoes.filter(doacao => doacao.id !== id));
        } catch (error) {
            alert("Erro na exclusão da doação");
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Lista de Doações</h3>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <div>
                <Link to="/doacoes/create">Inserir</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Pessoa Id</th>
                        <th>Local Id</th>
                        <th>Data</th>
                        <th>Criado</th>
                        <th>Atualizado</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {doacoes.map(doacao => (
                        <tr key={doacao.id}>
                            <td>{doacao.id}</td>
                            <td>{doacao.pessoa_Id}</td>
                            <td>{doacao.local_Id}</td>
                            <td>{doacao.data}</td>
                            <td>{doacao.created_at}</td>
                            <td>{doacao.updated_at}</td>
                            <td><Link to={`/doacoes/update/${doacao.id}`}>Atualizar</Link></td>    
                            <td><button onClick={() => handleDeleteDoacao(doacao.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListDoacoes;
