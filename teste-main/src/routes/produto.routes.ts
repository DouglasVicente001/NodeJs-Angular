import { Router } from "express";
import { auth } from "../middlewares/auth";
import { PostProdutoController } from "../modules/produto/postProduto/PostProdutoController";
// 

const postProdutoController = new PostProdutoController();

const produtoRoutes = Router();

// relacaoRoutes.get('/', getAllRelacoesController.handle);

produtoRoutes.use(auth);

// relacaoRoutes.patch('/', updateRelacaoController.handle);
produtoRoutes.post('/', postProdutoController.handle);
// relacaoRoutes.delete('/', deleteRelacaoController.handle);


export { produtoRoutes };