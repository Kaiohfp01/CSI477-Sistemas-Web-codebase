import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/Api";
import './Estilo.css'; // Importa os estilos CSS


const CreateEstado = () => {
    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const navigate = useNavigate();

    const handleNewEstado =  async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        

        const data = {
            nome,
            sigla
        };
        try{
            await api.post('/estados' , data);
            alert("Estado inserido com sucesso!");
            navigate('/estados');
        }catch (error){
            console.error(error);
            alert("Erro na inserção do Estado! ");
        }
    }
    return(
        <div>
            <h3>Cadastro de Estado: {nome} - {sigla}</h3>
            <form onSubmit={handleNewEstado}>
                <div>
                <label htmlFor="nome">Nome</label>
                <input type="text"  
                name="nome" 
                id="nome" 
                value={nome}
                onChange={e => setNome(e.target.value)}
                />
                </div>

                <div>
                <label htmlFor="sigla">Sigla</label>
                <input type="text"  
                name="sigla" 
                id="sigla" 
                value={sigla}
                onChange={e => setSigla(e.target.value)}
                />
                </div>
                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    );
}
export default CreateEstado;