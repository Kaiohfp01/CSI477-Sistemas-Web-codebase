import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";
import './Estilo.css'; // Importa os estilos CSS


const CreateTipoSanguineo = () => {
    const [tipo, setTipo] = useState('');
    const [fator, setFator] = useState('');
    const navigate = useNavigate();

    const handleNewTipoSanguineo = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            tipo,
            fator
        };

        try {
            await api.post('/tipos-sanguineos', data);
            alert("Tipo sanguíneo inserido com sucesso!");
            navigate('/tipos-sanguineos');
        } catch (error) {
            console.error(error);
            alert("Erro na inserção do tipo sanguíneo!");
        }
    };

    return (
        <div>
            <h3>Cadastro de Tipo Sanguíneo</h3>
            <form onSubmit={handleNewTipoSanguineo}>
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
                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    );
};

export default CreateTipoSanguineo;
