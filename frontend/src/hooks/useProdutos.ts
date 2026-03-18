import { useState, useEffect } from 'react';
import type { Produto } from '../types/index';

const API_URL = 'http://localhost:3333/produtos';

export function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // 1. GET - Buscar produtos do Backend
  const carregarProdutos = async () => {
    try {
      const resposta = await fetch(API_URL);
      const dados = await resposta.json();
      setProdutos(dados);
    } catch (erro) {
      console.error("Erro ao buscar produtos:", erro);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  // 2. POST e PUT - Salvar Produto
  const handleSalvarProduto = async (produto: Produto) => {
    try {
      const isEdicao = produtos.find((p) => p.id === produto.id);

      if (isEdicao) {
        // PUT - Atualizar no Backend
        await fetch(`${API_URL}/${produto.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(produto),
        });
      } else {
        // POST - Criar no Backend
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: produto.nome,
            preco: produto.preco,
            categoria: produto.categoria
          }),
        });
      }
    
      carregarProdutos();
    } catch (erro) {
      console.error("Erro ao salvar produto:", erro);
    }
  };

  // 3. DELETE - Excluir Produto
  const handleDeletarProduto = async (id: string) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      carregarProdutos();
    } catch (erro) {
      console.error("Erro ao excluir produto:", erro);
    }
  };

  return {
    produtos,
    handleSalvarProduto,
    handleDeletarProduto
  };
}