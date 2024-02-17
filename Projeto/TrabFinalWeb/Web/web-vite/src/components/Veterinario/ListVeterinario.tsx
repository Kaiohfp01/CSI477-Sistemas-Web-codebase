// ListVeterinario.tsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/Api";
import './EstiloVeterinario.css'; // Importe o arquivo de estilo para os veterinários

export interface VeterinarioInterface {
    id: number;
    nome: string;
    Especialidade: string;
    Contato: string;
}
const ListVeterinario = () => {
    const [veterinarios, setVeterinarios] = useState<VeterinarioInterface[]>([]);

    useEffect(() => {
        api.get('/veterinarios')
            .then(response => {
                console.log(response.data)
                setVeterinarios(response.data);
            })
            .catch(error => {
                console.error("Erro ao buscar veterinários:", error);
            });
    }, []);

    const handleDeleteVeterinario = async (id: number) => {
        if (!window.confirm("Confirma exclusão do veterinário?")) {
            return;
        }

        try {
            await api.delete('/veterinarios', {
                data: {
                    id
                }
            });
            setVeterinarios(veterinarios.filter(veterinario => veterinario.id !== id));
            alert("Veterinário excluído com sucesso!");
        } catch (error) {
            console.error("Erro na exclusão do veterinário:", error);
            alert("Erro na exclusão do veterinário!");
        }
    };

    return (
        <div className="list-container">
            <h2>Lista de Veterinários</h2>
            <div className="button-container">
                <Link to="/">Voltar</Link>
                <Link to="/veterinarios/create">Inserir Veterinário</Link>
            </div>
            <div className="veterinarios-container">
                {veterinarios.map(veterinario => (
                    <div key={veterinario.id} className="veterinario-box">
                        <h4>{veterinario.nome}</h4>
                        <p><strong>Especialidade:</strong> {veterinario.Especialidade}</p>
                        <p><strong>Contato:</strong> {veterinario.Contato}</p>
                        <div className="button-group">
                            <Link to={`/veterinarios/update/${veterinario.id}`} className="link-button">Atualizar</Link>
                            <button onClick={() => handleDeleteVeterinario(veterinario.id)} className="delete-button">Excluir</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListVeterinario;
