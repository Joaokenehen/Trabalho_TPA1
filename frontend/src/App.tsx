import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Produtos } from './pages/Produtos';
import { Sobre } from './pages/Sobre';
import { FormaProduto } from './pages/FormaProduto';
import type { Product } from './types/index';

function App() {
  // Estado central que guarda a lista de produtos (mudei para 'produtos')
  const [produtos, setProdutos] = useState<Product[]>([]);

  // Função para salvar (criar ou editar)
  const handleSaveProduct = (produto: Product) => {
    setProdutos((prev) => {
      const exists = prev.find((p) => p.id === produto.id);
      if (exists) {
        // Se já existe, atualiza
        return prev.map((p) => (p.id === produto.id ? produto : p));
      }
      // Se não existe, adiciona na lista
      return [...prev, produto];
    });
  };

  // Função para excluir
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
            element={<Produtos products={produtos} onDelete={handleDeleteProduct} />} 
          />
          
          {/* Trocado <About /> por <Sobre /> */}
          <Route path="/sobre" element={<Sobre />} />
          
          {/* Trocado <ProductForm /> por <FormaProduto /> */}
          <Route 
            path="/novo-produto" 
            element={<FormaProduto products={produtos} onSave={handleSaveProduct} />} 
          />
          <Route 
            path="/editar-produto/:id" 
            element={<FormaProduto products={produtos} onSave={handleSaveProduct} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;