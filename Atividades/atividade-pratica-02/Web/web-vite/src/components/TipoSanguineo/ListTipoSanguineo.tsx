import { useEffect, useState } from "react";
import api from "../../services/Api";
import { Link } from "react-router-dom";
import './Estilo.css'; // Importa os estilos CSS


export interface TipoSanguineoInterface {
    id: number;
    tipo: string;
    fator: string;
    created_at: string;
    updated_at: string;
}

const ListTiposSanguineos = () => {
    const [tiposSanguineos, setTiposSanguineos] = useState<TipoSanguineoInterface[]>([]);

    useEffect(() => {
        api.get('/tipos-sanguineos')
            .then(response => {
                setTiposSanguineos(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar tipos sanguíneos:", error);
            });
    }, []);

    const handleDeleteTipoSanguineo = async (id: number) => {
        if (!window.confirm("Confirma a exclusão do tipo sanguíneo?")) {
            return;
        }

        try {
            await api.delete('/tipos-sanguineos',{
                data : {
                    id
                }
            });
            alert("Tipo sanguíneo excluído com sucesso!");
            setTiposSanguineos(tiposSanguineos.filter(tipos => tipos.id !== id));
        } catch (error) {
            alert("Erro na exclusão do tipo sanguíneo");
            console.error(error);
        }
    };

    return (
        <div>
            <h3>Lista de Tipos Sanguíneos</h3>
            <div>
                <Link to="/tipos_sanguineos/create">Inserir</Link>
            </div>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tipo</th>
                        <th>Fator</th>
                        <th>Criado</th>
                        <th>Atualizado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {tiposSanguineos.map(tipo => (
                        <tr key={tipo.id}>
                            <td>{tipo.id}</td>
                            <td>{tipo.tipo}</td>
                            <td>{tipo.fator}</td>
                            <td>{tipo.created_at}</td>
                            <td>{tipo.updated_at}</td>
                            <td><Link to={`/tipos_sanguineos/update/${tipo.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => handleDeleteTipoSanguineo(tipo.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListTiposSanguineos;
