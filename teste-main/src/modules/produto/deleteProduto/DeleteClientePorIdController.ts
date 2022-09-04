import { Request, Response } from "express";
import { DeleteProdutoPorId } from "./DeleteProdutoPorId";


export class DeleteProdutoPorIdController {
    async handle(req: Request, res: Response) {
        const deleteProdutoPorId = new DeleteProdutoPorId();

        const result = await deleteProdutoPorId.execute(req, res);

        return res.status(200).json(result)
    }
}