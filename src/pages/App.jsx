import "react";
import { Routes, Route } from "react-router-dom";
import AddProjectPage from "./AddProjectPage";
import ListPage from "./ListPage";
import DetailPage from "./DetailPage";
import PropTypes from "prop-types";
import "../styles/app.css";

const App = ({ formData, authorImage, projectImage}) => {
  // Aquí vamos a declarar nuestras rutas
  return (
    <Routes>
      <Route path="/" element={<AddProjectPage />} />
      <Route path="/list" element={<ListPage formData={formData} authorImage={authorImage} />} />
      <Route path="/detail" element={<DetailPage projectImage={projectImage}/>} />
      
    </Routes>
  );
};

export default App;

App.propType = {
    formData: PropTypes.object.isRequired,
    authorImage: PropTypes.string.isRequired,
    projectImage: PropTypes.string.isRequired,
}