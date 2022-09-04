import { Request, Response } from "express";
import { DeleteAtendimentoPorId } from "./DeleteAtendimentoPorId";



export class DeleteAtendimentoPorIdController {
    async handle(req: Request, res: Response) {
        const deleteAtendimentoPorId = new DeleteAtendimentoPorId();

        const result = await deleteAtendimentoPorId.execute(req, res);

        return res.status(200).json(result)
    }
}