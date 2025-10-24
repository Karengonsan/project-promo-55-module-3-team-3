import logo from "../images/logo_fondo.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ul className="footer-links">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Sobre Nosotras</p>
          </li>
          <li>
            <p>Servicios</p>
          </li>
          <li>
            <p>Contacto</p>
          </li>
          <li>
            <p>Preguntas frecuentes</p>
          </li>
        </ul>
        <img src={logo} alt="Logo ProyectHadas" className="footer-logo" />
      </footer>
    </>
  );
};

export default Footer;
