import Header from "../components/Header";

const ListPage = () => {
  const projects = ["Array de proyectos"];
  return (
    <>
    <Header />
    
      {/* Lista de proyectos */}
      <button>Link para añadir proyecto nuevo</button>
      <ul>
        <li>2-3 proyectos default</li>
      </ul>
    </>
  );
};

export default ListPage;
