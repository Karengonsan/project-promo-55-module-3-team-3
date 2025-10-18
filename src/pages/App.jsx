import 'react'
import { Routes, Route } from "react-router-dom";
import '../styles/app.css'

const App = () => {
  // Aquí vamos a declarar nuestras rutas
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App