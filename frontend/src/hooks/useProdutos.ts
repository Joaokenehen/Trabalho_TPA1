import { useState } from 'react';
import type { Produto } from '../types/index';

export function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const handleSalvarProduto = (produto: Produto) => {
    setProdutos((prev) => {
      const exists = prev.find((p) => p.id === produto.id);
      if (exists) {
        return prev.map((p) => (p.id === produto.id ? produto : p));
      }
      return [...prev, produto];
    });
  };

  const handleDeletarProduto = (id: string) => {
    setProdutos((prev) => prev.filter((p) => p.id !== id));
  };

  // Retorna os dados e as funções para quem for usar este hook
  return {
    produtos,
    handleSalvarProduto,
    handleDeletarProduto
  };
}