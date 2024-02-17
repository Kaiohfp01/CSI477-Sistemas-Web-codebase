import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/Api";
import './Estilo.css'; // Importa os estilos CSS


const UpdateTipoSanguineo = () => {
    const [tipo, setTipo] = useState('');
    const [fator, setFator] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/tipos-sanguineos/${id}`)
        .then(response => {
            setTipo(response.data.tipo)
            setFator(response.data.fator)
        });
    }, [id]);

    const handleUpdateTipoSanguineo = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            id : parseInt(String(id)),
            tipo,
            fator
        };

        try {
            await api.put('/tipos-sanguineos', data);
            alert("Tipo sanguíneo atualizado com sucesso!");
            navigate('/tipos_sanguineos');
        } catch (error) {
            console.error(error);
            alert("Erro na atualização do tipo sanguíneo!");
        }
    };

    return (
        <div>
            <h3>Atualização de Tipo Sanguíneo</h3>
            <form onSubmit={handleUpdateTipoSanguineo}>
                <div>
                    <label htmlFor="tipo">Tipo</label>
                    <input
                        type="text"
                        name="tipo"
                        id="tipo"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="fator">Fator</label>
                    <input
                        type="text"
                        name="fator"
                        id="fator"
                        value={fator}
                        onChange={(e) => setFator(e.target.value)}
                    />
                </div>
                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    );
};

export default UpdateTipoSanguineo;
