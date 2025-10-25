import Header from "../components/Header.jsx";
import PreviewCard from "../components/PreviewCard.jsx"
import Footer from "../components/Footer.jsx";

const ListPage = () => {
  const projects = [];
  // Crear 4 objetos/proyectos con las mismas propiedades que el formData
  return (
    <>
    <Header />
     <button>Link para añadir proyecto nuevo</button>
      <ul>
        {/* mapear array de proyectos */}
        <li><PreviewCard /></li>
      </ul>
      <Footer />
    </>
  );
};

export default ListPage;
