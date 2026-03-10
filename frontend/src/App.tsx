import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Produtos } from './pages/Produtos';
import { Sobre } from './pages/Sobre';
import { FormaProduto } from './pages/FormaProduto';
import { Product } from './types/index';

function App() {
  // Estado central que guarda a lista de produtos
  const [products, setProducts] = useState<Product[]>([]);

  // Função para salvar (criar ou editar)
  const handleSaveProduct = (product: Product) => {
    setProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        // Se já existe, atualiza
        return prev.map((p) => (p.id === product.id ? product : p));
      }
      // Se não existe, adiciona na lista
      return [...prev, product];
    });
  };

  // Função para excluir
  const handleDeleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <BrowserRouter>
      <Menu />
      <div className="px-4 pb-10">
        <Routes>
          {/* O ERRO ESTAVA AQUI: Agora estamos passando as props corretamente */}
          <Route 
            path="/" 
            element={<Products products={products} onDelete={handleDeleteProduct} />} 
          />
          <Route path="/sobre" element={<About />} />
          <Route 
            path="/novo-produto" 
            element={<ProductForm products={products} onSave={handleSaveProduct} />} 
          />
          <Route 
            path="/editar-produto/:id" 
            element={<ProductForm products={products} onSave={handleSaveProduct} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;