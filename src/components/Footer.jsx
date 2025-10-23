import { Link } from "react-router-dom";
import logo from "../images/logo_fondo.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Sobre Nosotras</Link>
          </li>
          <li>
            <Link to="/">Servicios</Link>
          </li>
          <li>
            <Link to="/">Contacto</Link>
          </li>
          <li>
            <Link to="/">Preguntas frecuentes</Link>
          </li>
        </ul>
        <img src={logo} alt="Logo ProyectHadas" className="footer-logo" />
      </footer>
    </>
  );
};

export default Footer;
