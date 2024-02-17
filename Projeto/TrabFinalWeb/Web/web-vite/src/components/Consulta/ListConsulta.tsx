import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/Api";
import { VeterinarioInterface } from "../Veterinario/ListVeterinario";

// Interface para representar os dados de consulta
export interface ConsultaInterface {
    id: number;
    data: string;
    motivo: string;
    medicamentos: string;
    veterinario:  VeterinarioInterface
}
const ListConsultas = () => {
    const [consultas, setConsultas] = useState<ConsultaInterface[]>([]);

    useEffect(() =>{
                
        api.get('/consultas')
            .then(response => {
                console.log(response.data);
                setConsultas(response.data);
            })

    }, [])
   

    const handleDeleteConsulta = async (id: number) => {
        if (!window.confirm("Confirma exclusão da Consulta?")) {
            return;
        }

        try {
            await api.delete('/consultas', {
                data: {
                    id
                }
            });
            setConsultas(consultas.filter(consulta => consulta.id !== id));
            alert("Consulta excluída com sucesso!");
        } catch (error) {
            console.error("Erro na exclusão da Consulta:", error);
            alert("Erro na exclusão da Consulta!");
        }
    };

    return (
        <div>
            <h2>Lista de Consultas</h2>
            <div>
                <Link to="/">Voltar</Link>
            </div>
            <div>
                <Link to="/consultas/create">Inserir Consulta</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Data</th>
                        <th>Motivo</th>
                        <th>Medicamentos</th>
                        <th>Veterinário</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {consultas.map(consulta => (
                        <tr key={consulta.id}>
                            <td>{consulta.id}</td>
                            <td>{consulta.data}</td>
                            <td>{consulta.motivo}</td>
                            <td>{consulta.medicamentos}</td>
                            <td>{consulta.veterinario.nome}</td>
                            <td>
                                <Link to={`/consultas/update/${consulta.id}`}>
                                    Atualizar
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handleDeleteConsulta(consulta.id)}>
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListConsultas;
