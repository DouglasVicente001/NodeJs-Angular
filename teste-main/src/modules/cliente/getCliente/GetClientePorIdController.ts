import { Request, Response } from "express";
import { GetClientesPorId } from "./GetClientesPorId";

export class GetClientesPorIdController {
    async handle(req: Request, res: Response) {
        const getClientesPorNome = new GetClientesPorId();

        const result = await getClientesPorNome.execute(req, res);

        return res.status(200).json(result)
    }
}