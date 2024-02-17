// ListPessoa.tsx

import { useEffect, useState } from "react";
import api from "../../services/Api";
import { Link } from "react-router-dom";
import './EstiloPessoa.css';

export interface PessoaInterface {
    id: number;
    nome: string;
    idade: number;
    sexo: string;
    contato: string;
    pets: any[]; 
}

const ListPessoa = () => {
    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);

    useEffect(() => {
        api.get('/pessoa')
            .then(response => {
                setPessoas(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter a lista de pessoas:', error);
            });
    }, []);

    const handleDeletePessoa = async (id: number) => {
        if (!window.confirm("Confirma a exclusão da pessoa?")) {
            return;
        }

        try {
            await api.delete('/pessoa', {
                data : {
                    id
                }});
            setPessoas(pessoas.filter(pessoa => pessoa.id !== id));
            alert("Pessoa excluída com sucesso!");
        } catch (error) {
            alert("Erro ao excluir a pessoa");
            console.error('Erro ao excluir a pessoa:', error);
        }
    };

    return (
        <div className="list-container">
            <h3>Lista de Pessoas</h3>

            <div className="button-container">
                <Link to="/pessoas/create" className="button">Inserir</Link>
                <Link to="/" className="button">Voltar</Link>
            </div>
            <div className="pessoas-container">
                {pessoas.map(pessoa => (
                    <div key={pessoa.id} className="pessoa-box">
                        <h4>{pessoa.nome}</h4>
                        <p><strong>Idade:</strong> {pessoa.idade}</p>
                        <p><strong>Sexo:</strong> {pessoa.sexo}</p>
                        <p><strong>Contato:</strong> {pessoa.contato}</p>
                        <div className="button-group">
                            <Link to={`/pessoas/update/${pessoa.id}`} className="link-button">Atualizar</Link>
                            <button onClick={() => handleDeletePessoa(pessoa.id)} className="delete-button">Excluir</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListPessoa;
