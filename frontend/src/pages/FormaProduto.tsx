import { useState, type FormEvent } from 'react';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import { type Produto } from '../types/index';
import { type ContextoProduto } from '../components/Layout';

export function FormaProduto() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { produtos, handleSalvarProduto } = useOutletContext<ContextoProduto>();
  const produtoEditado = id ? produtos.find((p) => p.id === id) : null;
  const [nome, setNome] = useState(produtoEditado ? produtoEditado.nome : '');
  const [preco, setPreco] = useState(produtoEditado ? produtoEditado.preco.toString() : '');
  const [categoria, setCategoria] = useState(produtoEditado ? produtoEditado.categoria : '');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const dadosProduto: Produto = {
      id: id ? id : Date.now().toString(),
      nome,
      preco,
      categoria,
    };

    handleSalvarProduto(dadosProduto);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto max-w-2xl bg-white p-6 rounded-lg shadow mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {id ? 'Editar Produto ✏️' : 'Criar Produto ➕'}
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Nome do Produto</label>
          <input
            type="text"
            required
            data-testid="produto-nome-input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            placeholder="Ex: Teclado Mecânico"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Preço</label>
          <input
            type="number"
            step="0.01"
            required
            data-testid="produto-preco-input"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            placeholder="Ex: 250.00"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Categoria</label>
          <input
            type="text"
            required
            data-testid="produto-categoria-input"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            placeholder="Ex: Periféricos"
          />
        </div>

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            data-testid="salvar-produto-button"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={handleCancel}
            data-testid="cancelar-produto-button"
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded font-medium transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}