import { Router } from "express";
import { DeleteAtendimentoPorIdController } from "../modules/atendimento/deleteAtendimentos/DeleteAtendimentoPorIdController";
import { GetAtendimentosPorIdController } from "../modules/atendimento/getAtendimentos/GetAtendimentosPorIdController";
import { GetTodosAtendimentosController } from "../modules/atendimento/getAtendimentos/GetTodosAtendimentosController";
import { PostAtendimentoController } from "../modules/atendimento/postAtendimento/PostAtendimentoController";

import { auth } from './../middlewares/auth'


const postAtendimentoController = new PostAtendimentoController();
const getTodosAtendimentosController = new GetTodosAtendimentosController();
const getAtendimentosPorIdController = new GetAtendimentosPorIdController();
const deleteAtendimentoPorIdController = new DeleteAtendimentoPorIdController();


const atendimentoRoutes = Router();



atendimentoRoutes.get('/', getTodosAtendimentosController.handle);
atendimentoRoutes.get('/id', getAtendimentosPorIdController.handle);

atendimentoRoutes.use(auth);

atendimentoRoutes.post('/', postAtendimentoController.handle);
atendimentoRoutes.delete('/', deleteAtendimentoPorIdController.handle);



export { atendimentoRoutes }