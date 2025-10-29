import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import PreviewCard from "../components/PreviewCard.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/previewCard.css";
import "../styles/listPage.css";

const defaultProjects = [
  {
    id: "1",
    name: "CodeHer",
    slogan: "La tecnología también tiene rostro de mujer",
    technologies: "React, Node.js, MongoDB, Sass",
    repo: "https://github.com/ejemplo/codeher",
    demo: "https://codeher.netlify.app/",
    desc: "Plataforma educativa creada por mujeres desarrolladoras para enseñar programación a principiantes mediante retos interactivos y mentorías colaborativas.",
    autor: "Claudia Fernández",
    job: "Desarrolladora Full Stack",
  },
  {
    id: "2",
    name: "ArteViva",
    slogan: "El arte como herramienta de transformación social",
    technologies: "HTML, CSS, JavaScript, Firebase",
    repo: "https://github.com/ejemplo/arteviva",
    demo: "https://arteviva.web.app/",
    desc: "Galería digital que visibiliza el trabajo de artistas emergentes, ofreciendo exposiciones virtuales e historias inspiradoras sobre sus procesos creativos.",
    autor: "Carla Gómez",
    job: "Artista visual y diseñadora",
  },
  {
    id: "3",
    name: "GreenRoots",
    slogan: "Cuidar el planeta desde nuestras raíces",
    technologies: "React, Express, API REST, MongoDB",
    repo: "https://github.com/ejemplo/greenroots",
    demo: "https://greenroots-demo.netlify.app/",
    desc: "Iniciativa de sostenibilidad que promueve huertos urbanos colaborativos, educación ambiental y herramientas digitales para medir el impacto ecológico.",
    autor: "Nerea López",
    job: "Consultora en sostenibilidad",
  },
  {
    id: "4",
    name: "EduMinds",
    slogan: "Educación creativa para un futuro consciente",
    technologies: "React, Vite, Firebase, Tailwind",
    repo: "https://github.com/ejemplo/eduminds",
    demo: "https://eduminds.netlify.app/",
    desc: "Plataforma educativa que ofrece recursos y talleres de innovación pedagógica para docentes y familias, fomentando la creatividad y la igualdad en las aulas.",
    autor: "Patricia Morales",
    job: "Pedagoga y formadora digital",
  },
];

const ListPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));

    if (!storedProjects || storedProjects.length === 0) {
      localStorage.setItem("projects", JSON.stringify(defaultProjects));
      setProjects(defaultProjects);
    } else {
      setProjects(storedProjects);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Link to="/">
          <button>Nuevo proyecto</button>
        </Link>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <PreviewCard formData={project} />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default ListPage;
