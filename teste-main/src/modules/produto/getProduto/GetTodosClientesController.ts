import { Request, Response } from "express";
import { GetTodosClientes } from "./GetTodosClientes";


export class GetTodosClientesController {
    async handle(req: Request, res: Response) {
        const getTodosClientes = new GetTodosClientes();

        const result = await getTodosClientes.execute();

        return res.status(200).json(result);
    }
}