import { Router } from 'express';
import { ProdutoController } from '../controller/ProdutoController';

const router = Router();

router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.listarId);
router.post('/', ProdutoController.criar);
router.put('/:id', ProdutoController.atualizar);
router.delete('/:id', ProdutoController.deletar);

export default router;