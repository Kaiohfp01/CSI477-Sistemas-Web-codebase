import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";
import { VeterinarioInterface} from "../Veterinario/ListVeterinario";


const CreateConsultas = () => {
    const [data, setData] = useState('');
    const [motivo, setMotivo] = useState('');
    const [medicamentos, setMedicamentos] = useState('');
    const [veterinarioId, setVeterinarioId] = useState(0);

    const [veterinarios, setVeterinarios] = useState <VeterinarioInterface[]>([]);

    useEffect(() => {
        api.get('/veterinarios')
        .then(response =>{
            setVeterinarios(response.data);
        })
    },[]);


    const navigate = useNavigate();

    const handleNewConsulta = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const requestData = {
            data,
            motivo,
            medicamentos,
            veterinarioId
        };

        try {
            await api.post('/consultas', requestData);
            alert("Consulta inserida com sucesso!");
            navigate('/consultas');
        } catch (error) {
            console.error("Erro na inserção da Consulta:", error);
            alert("Erro na inserção da Consulta!");
        }
    };

    return (
        <div className="container">
            <h3>Cadastro de Consulta</h3>
            <form onSubmit={handleNewConsulta}>
                <div className="form-group">
                    <label htmlFor="data">Data</label>
                    <input
                        type="text"
                        name="data"
                        id="data"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="motivo">Motivo</label>
                    <input
                        type="text"
                        name="motivo"
                        id="motivo"
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="medicamentos">Medicamentos</label>
                    <input
                        type="text"
                        name="medicamentos"
                        id="medicamentos"
                        value={medicamentos}
                        onChange={(e) => setMedicamentos(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="veterinarioId">Veterinário</label>
                    <select
                        name="veterinarioId"
                        id="veterinarioId"
                        onChange={(e) => setVeterinarioId(parseInt(e.target.value))}
                    >
                        <option value="0">Selecione:</option>
                        {veterinarios.map((veterinario) => (
                            <option key={veterinario.id} value={veterinario.id}>
                                {veterinario.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    );
};

export default CreateConsultas;
