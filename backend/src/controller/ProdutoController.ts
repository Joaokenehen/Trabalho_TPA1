import { Request, Response } from 'express';
import { Produto, produtos } from '../model/Produto';

export const ProdutoController = {
  
  listar(req: Request, res: Response) {
    return res.json(produtos);
  },

  listarId(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;

    const produto = produtos.find(p => p.id === id);

    if(!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    return res.json(produto);
    },
  
  criar(req: Request, res: Response) {
    const { nome, preco, categoria } = req.body;
    
    const novoProduto: Produto = {
      id: Date.now().toString(),
      nome,
      preco,
      categoria
    };
    
    produtos.push(novoProduto);
    return res.status(201).json(novoProduto);
  },


  atualizar(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const { nome, preco, categoria } = req.body;
    
    const index = produtos.findIndex(p => p.id === id);
    
    if (index === -1) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    
    produtos[index] = { id, nome, preco, categoria };
    return res.json(produtos[index]);
  },


  deletar(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    
    const index = produtos.findIndex(p => p.id === id);
    
    if (index === -1) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    
    produtos.splice(index, 1);
    return res.status(204).send();
  }
};