import 'react'
import { Routes, Route, } from "react-router-dom";
import AddProjectPage from './AddProjectPage';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import '../styles/app.css'


const App = () => {
  // Aquí vamos a declarar nuestras rutas
  return (
    <Routes>
      <Route path="/" element={<AddProjectPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  )
}

export default App;