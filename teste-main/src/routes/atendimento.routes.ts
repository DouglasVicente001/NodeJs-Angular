import { Router } from "express";
import { GetAtendimentosPorIdController } from "../modules/atendimento/getAtendimentos/GetAtendimentosPorIdController";
import { GetTodosAtendimentosController } from "../modules/atendimento/getAtendimentos/GetTodosAtendimentosController";


import { PostAtendimentoController } from "../modules/atendimento/postAtendimento/PostAtendimentoController";
// import { DeletePalavrasPorIdController } from "../modules/palavras/deletePalavras/DeletePalavrasPorIdController";

// import { GetPalavrasPorNomeController } from "../modules/palavras/getPalavras/GetPalavrasPorNomeController";
// import { PostPalavrasController } from "../modules/palavras/postPalavras/PostPalavrasController";
// import { UpdatePalavraController } from "../modules/palavras/updatePalavras/UpdatePalavraController";
import { auth } from './../middlewares/auth'

const postAtendimentoController = new PostAtendimentoController();
// const getAllPalavrasController = new GetAllPalavrasController();
// const getPalavrasPorNomeController = new GetPalavrasPorNomeController();
// const deletePalavrasPorIdController = new DeletePalavrasPorIdController();
// const updatePalavraController = new UpdatePalavraController();
const getTodosAtendimentosController = new GetTodosAtendimentosController();
const getAtendimentosPorIdController = new GetAtendimentosPorIdController();


const atendimentoRoutes = Router();

atendimentoRoutes.get('/', getTodosAtendimentosController.handle);
atendimentoRoutes.get('/id', getAtendimentosPorIdController.handle);

atendimentoRoutes.use(auth);

atendimentoRoutes.post('/', postAtendimentoController.handle);
// palavrasRoutes.delete('/', deletePalavrasPorIdController.handle);
// palavrasRoutes.patch('/', updatePalavraController.handle);


export { atendimentoRoutes }