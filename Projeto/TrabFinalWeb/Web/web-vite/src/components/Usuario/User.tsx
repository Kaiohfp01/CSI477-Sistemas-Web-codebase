import { useState } from "react";
import api from "../../services/Api";
import { useNavigate } from "react-router-dom";
import './User.css'; 

const LoginUser = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginUser = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            email,
            password
        }

        try {
            await api.post('/users/login', data).then(response => {
                const { nome, token, header} = response.data;
                window.localStorage.setItem('token', token);
                window.localStorage.setItem('header', header);
                window.localStorage.setItem('nome', nome);
                navigate('/');
            });
            navigate('/');
        } catch (error) {
            alert('Login feito com sucesso!');
            navigate('/')
        }
    }

    return(
        <div className="login-container">
            <h2>Acesso ao sistema</h2>
            <form onSubmit={handleLoginUser}>
                <div>
                    <label htmlFor="email" className="visually-hidden"></label>
                    <input type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="  E-mail de acesso"
                        required
                        style={{ height: '34px', width: '100%' }} // Ajuste de altura e largura
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="sigla" className="visually-hidden"></label>
                    <input type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="Senha de acesso"
                        style={{ width: '103%' }} // Ajuste de largura
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" style={{ height: '40px', width: '100%' }}>Acessar</button> {/* Ajuste de altura e largura */}
                <button type="reset" style={{ height: '40px', width: '100%' }}>Limpar</button> {/* Ajuste de altura e largura */}
            </form>
        </div>
    );
}

export default LoginUser;
