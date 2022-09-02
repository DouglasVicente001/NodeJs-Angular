import { PostClienteController } from './../modules/cliente/postCliente/PostClienteController';
import { Router } from "express";
import { auth } from "../middlewares/auth";
import { GetTodosClientesController } from "../modules/cliente/getCliente/GetTodosClientesController";
import { GetClientesPorIdController } from '../modules/cliente/getCliente/GetClientePorIdController';
import { DeleteClientePorIdController } from '../modules/cliente/deleteCliente/DeleteClientePorIdController';
// import { DeleteEtiquetaPorIdController } from "../modules/cliente/deleteCliente/DeleteClientePorIdController";
// import { GetAllEtiquetasController } from "../modules/cliente/getCliente/GetTodosClientesController";
// import { GetEtiquetasPorNomeController } from "../modules/cliente/getCliente/GetClientesPorNomeController";

// import { UpdateEtiquetaController } from "../modules/cliente/updateEtiqueta/UpdateEtiquetaController";

const postEClienteController = new PostClienteController();
const getTodosClientesController = new GetTodosClientesController();
const getClientesPorNome = new GetClientesPorIdController();
const deleteClientePorIdController = new DeleteClientePorIdController();
// const updateEtiquetaController = new UpdateEtiquetaController();




const clienteRoutes = Router();




clienteRoutes.get('/id', getClientesPorNome.handle);
clienteRoutes.get('/', getTodosClientesController.handle);

clienteRoutes.use(auth);

clienteRoutes.post('/', postEClienteController.handle);
clienteRoutes.delete('/id', deleteClientePorIdController.handle);
// etiquetaRoutes.patch('/', updateEtiquetaController.handle);


export { clienteRoutes };