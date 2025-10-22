import 'react'
import { Routes, Route } from "react-router-dom";
import AddProjectPage from './AddProjectPage';
import '../styles/app.css'

const App = () => {
  // Aquí vamos a declarar nuestras rutas
  return (
    <Routes>
      <Route path="/" element={<AddProjectPage />} />
    </Routes>
  )
}

export default App