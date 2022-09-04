import { PostClienteController } from './../modules/cliente/postCliente/PostClienteController';
import { Router } from "express";
import { auth } from "../middlewares/auth";
import { GetTodosClientesController } from "../modules/cliente/getCliente/GetTodosClientesController";
import { GetClientesPorIdController } from '../modules/cliente/getCliente/GetClientePorIdController';
import { DeleteClientePorIdController } from '../modules/cliente/deleteCliente/DeleteClientePorIdController';
import { UpdateClienteController } from '../modules/cliente/updateCliente/UpdateClienteController';



const postEClienteController = new PostClienteController();
const getTodosClientesController = new GetTodosClientesController();
const getClientesPorNome = new GetClientesPorIdController();
const deleteClientePorIdController = new DeleteClientePorIdController();
const updateEtiquetaController = new UpdateClienteController();


const clienteRoutes = Router();

clienteRoutes.get('/id', getClientesPorNome.handle);
clienteRoutes.get('/', getTodosClientesController.handle);

clienteRoutes.use(auth);

clienteRoutes.post('/', postEClienteController.handle);
clienteRoutes.delete('/', deleteClientePorIdController.handle);
clienteRoutes.patch('/', updateEtiquetaController.handle);


export { clienteRoutes };