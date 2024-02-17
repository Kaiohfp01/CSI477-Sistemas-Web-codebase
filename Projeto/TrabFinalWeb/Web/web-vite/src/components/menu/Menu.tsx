import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/Api';
import './menu.css'

const Menu = () => {

    const [ userName, setUserName ] = useState<string | undefined>('');

    useEffect(() => {

        const userName = window.localStorage.getItem('nome') || undefined;
        setUserName(userName);

    },[])

    const handleLogout = () => {

        window.localStorage.clear();
        setUserName(undefined);
        api.defaults.headers.common['Authorization'] = false;

    }

    return(
        <div className="menu-container">
            <h2>Menu</h2>
            <ul>
                <li><Link to="/pessoas">Pessoas</Link></li>
                <li><Link to="/pets">Pets</Link></li>
                <li><Link to="/veterinarios">Veterinarios</Link></li>
                <li><Link to="/consultas">Consultas</Link></li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Menu;
