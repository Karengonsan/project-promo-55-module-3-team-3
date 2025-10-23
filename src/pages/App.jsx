import 'react'
import { Routes, Route } from "react-router-dom";
import '../styles/app.css'
import AddProjectPage from './AddProjectPage';

const App = () => {
  // Aquí vamos a declarar nuestras rutas
  return (
    <Routes>
      <Route path="/" element={<AddProjectPage/>}/>
    </Routes>
  )
}

export default App