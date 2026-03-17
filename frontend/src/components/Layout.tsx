import { Outlet } from 'react-router-dom';
import { Menu } from './Menu';
import { useProdutos } from '../hooks/useProdutos';
import { type Produto } from '../types/index';

// Exportamos essa interface para as páginas saberem o que o contexto fornece
export interface ContextoProduto {
  produtos: Produto[];
  handleSalvarProduto: (produto: Produto) => void;
  handleDeletarProduto: (id: string) => void;
}

export function Layout() {
  const { produtos, handleSalvarProduto, handleDeletarProduto } = useProdutos();

  const contexto: ContextoProduto = {
    produtos,
    handleSalvarProduto,
    handleDeletarProduto,
  };

  return (
    <>
      <Menu />
      <div className="px-4 pb-10">
        <Outlet context={contexto} /> 
      </div>
    </>
  );
}