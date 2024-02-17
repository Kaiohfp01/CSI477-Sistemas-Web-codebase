import { Link } from "react-router-dom";
import "./menu.css"; // Importando o arquivo CSS

const Menu = () => {
    return (
        <div className="menu-background"> {/* Adicionando a classe de fundo */}
            <h2 className="menu-title">Aplicação de Controle de Doação de sangue</h2> {/* Adicionando a classe para o título */}
            <ul className="menu-list"> {/* Adicionando a classe para a lista */}
                <li className="menu-item"><Link className="menu-link" to="/">Home</Link></li> {/* Adicionando classes para os itens e links */}
                <li className="menu-item"><Link className="menu-link" to="/estados">Estados</Link></li>
                <li className="menu-item"><Link className="menu-link" to="/cidades">Cidades</Link></li>
                <li className="menu-item"><Link className="menu-link" to="/pessoas">Pessoas</Link></li>
                <li className="menu-item"><Link className="menu-link" to="/doacoes">Doações</Link></li>
                <li className="menu-item"><Link className="menu-link" to="/tipos_sanguineos">Tipos Sanguíneos</Link></li>
                <li className="menu-item"><Link className="menu-link" to="/locais_coleta">Locais de Coleta</Link></li>
            </ul>
        </div>
    );
}

export default Menu;
