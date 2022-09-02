import { Router } from "express";
import { GetTodosAtendimentosController } from "../modules/atendimento/getAtendimentos/GetAllPalavrasController";


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


const atendimentoRoutes = Router();

atendimentoRoutes.get('/', getTodosAtendimentosController.handle);
// palavrasRoutes.get('/nome', getPalavrasPorNomeController.handle);

atendimentoRoutes.use(auth);

atendimentoRoutes.post('/', postAtendimentoController.handle);
// palavrasRoutes.delete('/', deletePalavrasPorIdController.handle);
// palavrasRoutes.patch('/', updatePalavraController.handle);


export { atendimentoRoutes }