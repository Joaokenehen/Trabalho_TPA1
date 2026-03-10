import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Produtos } from './pages/Produtos';
import { Sobre } from './pages/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div style={{ padding: '0 2rem' }}>
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* A rota de formulário será criada no próximo passo */}
          <Route path="/novo-produto" element={<h2>Tela de Cadastro em construção...</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;