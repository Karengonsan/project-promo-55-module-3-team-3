import "../styles/header.css";
import logo2 from "../images/logo_fondo.png";
import menu from "../images/menu_icon.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="menu">
            <img
              src={menu}
              alt="Menu"
              className="menu-icon"
              //onclick={toggleMenu}
            />

            <ul className="menu-list">
              <li>
                <a href="#">Menú principal</a>
              </li>
              <li>
                <a href="#">Nuestros proyectos</a>
              </li>
              <li>
                <a href="#">Vista previa</a>
              </li>
            </ul>
          </div>
          {/* <h2 className="company-name">ProyectHadas</h2> */}
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
