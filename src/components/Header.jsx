import { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../images/logo_fondo.png";
import menu from "../images/menu_icon.svg";
import "../styles/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="menu">
            <img
              src={menu}
              alt="Icono menú"
              className="menu-icon"
              onClick={toggleMenu}
            />

            <ul className={`menu-list ${isMenuOpen ? "menu-list--open" : ""}`}>
              <li>
                <Link to="/">Menú principal</Link>
              </li>
              <li>
                <Link to="/list">Nuestros proyectos</Link>
              </li>
            </ul>
          </div>

          <img src={logo2} alt="Logo ProyectHadas" className="header-logo" />
        </div>

        <div className="header-text">
          <h1>ProyectHadas</h1>
          <h3>Proyectos que cuentan historias.</h3>
        </div>
      </header>
    </>
  );
};

export default Header;
