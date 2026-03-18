import express from 'express';
import cors from 'cors';
import produtoRoutes from './routes/ProdutoRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/produtos', produtoRoutes);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Teste no Postman: http://localhost:${PORT}/produtos`);
});