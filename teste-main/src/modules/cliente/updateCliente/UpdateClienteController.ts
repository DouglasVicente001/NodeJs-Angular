import { Request, Response } from "express";
import { UpdateCliente } from "./UpdateCliente";



export class UpdateClienteController {
    async handle(req: Request, res: Response) {
        const updateCliente = new UpdateCliente();

        const result = await updateCliente.execute(req);

        return res.status(200).json(result)
    }
}