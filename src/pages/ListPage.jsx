import Header from "../components/Header";
import Footer from "../components/Footer";

const ListPage = () => {
  return (
    <>
    <Header />
    
      {/* Lista de proyectos */}
      <button>Link para añadir proyecto nuevo</button>
      <ul>
        <li>2-3 proyectos default</li>
      </ul>
      <Footer />
    </>
  );
};

export default ListPage;
