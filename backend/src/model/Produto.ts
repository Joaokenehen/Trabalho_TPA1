
export interface Produto {
  id: string;
  nome: string;
  preco: string | number;
  categoria: string;
}

export const produtos: Produto[] = [];