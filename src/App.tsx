import Login from './pages/Login'
import { ProdutoP } from './pages/ProdutoP'
import Ordem from './pages/Ordem'
import Contato from './pages/Contato'
import './styles/global.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// componente funcional
function App() {
  return (
    <Router>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/produto" element={<ProdutoP />} />
          <Route path="/ordem" element={<Ordem />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
