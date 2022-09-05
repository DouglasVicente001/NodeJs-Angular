import { Router } from "express";
import { auth } from "../middlewares/auth";
import { DeleteProdutoPorIdController } from "../modules/produto/deleteProduto/DeleteClientePorIdController";
import { GetProdutosPorIdController } from "../modules/produto/getProduto/GetProdutosPorIdController";
import { GetTodosProdutosController } from "../modules/produto/getProduto/GetTodosClientesController";


import { PostProdutoController } from "../modules/produto/postProduto/PostProdutoController";
import { UpdateProdutoController } from "../modules/produto/updateProduto/UpdateProdutoController";
// 

const postProdutoController = new PostProdutoController();
const getTodosProdutos = new GetTodosProdutosController();
const getProdutosPorIdController = new GetProdutosPorIdController();
const deleteProdutoPorIdController = new DeleteProdutoPorIdController();
const updateProdutoController = new UpdateProdutoController();

const produtoRoutes = Router();

produtoRoutes.get('/', getTodosProdutos.handle);
produtoRoutes.get('/id', getProdutosPorIdController.handle);

produtoRoutes.use(auth);

produtoRoutes.patch('/', updateProdutoController.handle);
produtoRoutes.post('/', postProdutoController.handle);
produtoRoutes.delete('/', deleteProdutoPorIdController.handle);


export { produtoRoutes };