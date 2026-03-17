import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Produtos } from './pages/Produtos';
import { Sobre } from './pages/Sobre';
import { FormaProduto } from './pages/FormaProduto';
import type { Produto } from './types/index';

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const handleSaveProduct = (produto: Produto) => {
    setProdutos((prev) => {
      const exists = prev.find((p) => p.id === produto.id);
      if (exists) {
        return prev.map((p) => (p.id === produto.id ? produto : p));
      }
      return [...prev, produto];
    });
  };

  const handleDeleteProduct = (id: string) => {
    setProdutos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <BrowserRouter>
      <Menu />
      <div className="px-4 pb-10">
        <Routes>
          {/* Trocado <Products /> por <Produtos /> */}
          <Route 
            path="/" 
            element={<Produtos produto={produtos} onDelete={handleDeleteProduct} />} 
          />
          
          {/* Trocado <About /> por <Sobre /> */}
          <Route path="/sobre" element={<Sobre />} />
          
          {/* Trocado <ProductForm /> por <FormaProduto /> */}
          <Route 
            path="/novo-produto" 
            element={<FormaProduto produto={produtos} onSave={handleSaveProduct} />} 
          />
          <Route 
            path="/editar-produto/:id" 
            element={<FormaProduto produto={produtos} onSave={handleSaveProduct} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;