import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../services/Api";
import { VeterinarioInterface} from "../Veterinario/ListVeterinario";


const UpdateConsultas = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [data, setData] = useState('');
    const [motivo, setMotivo] = useState('');
    const [medicamentos, setMedicamentos] = useState('');
    const [veterinarioId, setVeterinarioId] = useState(0);

    const [veterinarios, setVeterinarios] = useState <VeterinarioInterface[]>([]);

    useEffect(() => {

        api.get(`/consultas/${id}`)
            .then(response => {
                setData(response.data.datas);
                setMotivo(response.data.motivo);
                setMedicamentos(response.data.medicamentos);
                setVeterinarioId(response.data.medicamentos);
            })

    }, [id]);

    useEffect(() => {
        api.get('/veterinarios')
        .then(response =>{
            setVeterinarios(response.data);
        })
    },[]);


    const handleUpdateConsulta = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const datas = {
            data,
            motivo,
            medicamentos,
            veterinarioId
        };

        try {
            await api.put('/consultas', datas);
            alert("Consulta atualizada com sucesso!");
            navigate('/consultas');
        } catch (error) {
            console.error("Erro ao atualizar a consulta:", error);
            alert("Erro ao atualizar a consulta!");
        }
    };

    return (
        <div>
            <h3>Atualização de Consulta</h3>
            <form onSubmit={handleUpdateConsulta}>
                <div>
                    <label htmlFor="data">Data</label>
                    <input
                        type="text"
                        name="data"
                        id="data"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="motivo">Motivo</label>
                    <input
                        type="text"
                        name="motivo"
                        id="motivo"
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="medicamentos">Medicamentos</label>
                    <input
                        type="text"
                        name="medicamentos"
                        id="medicamentos"
                        value={medicamentos}
                        onChange={(e) => setMedicamentos(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="veterinarioId">Veterinário</label>
                    <select
                        name="veterinarioId"
                        id="veterinarioId"
                        value={veterinarioId}
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
                <button type="submit">Atualizar</button>
                <Link to="/consultas">Voltar</Link>
            </form>
        </div>
    );
};

export default UpdateConsultas;
