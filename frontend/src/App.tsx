import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Produtos } from './pages/Produtos';
import { Sobre } from './pages/Sobre';
import { FormaProduto } from './pages/FormaProduto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/novo-produto" element={<FormaProduto />} />
          <Route path="/editar-produto/:id" element={<FormaProduto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;