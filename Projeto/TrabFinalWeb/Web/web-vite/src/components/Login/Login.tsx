// Arquivo Login.js
import { useState } from 'react';
import './Login.css'; // Arquivo de estilo CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();   
    console.log('Username:', username);
    console.log('Password:', password);
    // Aqui você pode adicionar sua lógica de autenticação
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
