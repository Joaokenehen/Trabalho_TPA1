import { Link, useNavigate } from 'react-router-dom';
import { type Produto } from '../types/index';

interface ProdutoProps {
  produto: Produto[];
  onDelete: (id: string) => void;
}

export function Produtos({ produto, onDelete }: ProdutoProps) {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto max-w-5xl bg-white p-6 rounded-lg shadow mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Listagem de Produtos 🧾</h1>
        
        <Link to="/novo-produto">
          <button 
            data-testid="criar-produto-button"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
          >
            Criar Produto
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 p-3 font-semibold text-gray-700">Nome</th>
              <th className="border border-gray-200 p-3 font-semibold text-gray-700">Preço</th>
              <th className="border border-gray-200 p-3 font-semibold text-gray-700">Categoria</th>
              <th className="border border-gray-200 p-3 font-semibold text-gray-700 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produto.length === 0 ? (
              <tr>
                <td colSpan={4} className="border border-gray-200 p-6 text-center text-gray-500">
                  Nenhum produto cadastrado.
                </td>
              </tr>
            ) : (
              produto.map((produto) => (
                <tr key={produto.id} data-testid="produto-row" className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-200 p-3">{produto.nome}</td>
                  <td className="border border-gray-200 p-3">R$ {produto.preco}</td>
                  <td className="border border-gray-200 p-3">{produto.categoria}</td>
                  <td className="border border-gray-200 p-3 flex justify-center gap-2">
                    <button 
                      onClick={() => navigate(`/editar-produto/${produto.id}`)}
                      data-testid="edit-product-button" 
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => onDelete(produto.id)}
                      data-testid="delete-product-button"
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}