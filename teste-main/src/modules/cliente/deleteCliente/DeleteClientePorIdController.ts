import { Request, Response } from "express";
import { DeleteClientePorId } from "./DeleteClientePorId";


export class DeleteClientePorIdController {
    async handle(req: Request, res: Response) {
        const deleteClientePorId = new DeleteClientePorId();

        const result = await deleteClientePorId.execute(req, res);

        return res.status(200).json(result)
    }
}