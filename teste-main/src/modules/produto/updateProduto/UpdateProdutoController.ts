import { Request, Response } from "express";
import { UpdateProduto } from "./UpdateProduto";



export class UpdateProdutoController {
    async handle(req: Request, res: Response) {
        const updateProduto = new UpdateProduto();

        const result = await updateProduto.execute(req);

        return res.status(200).json(result)
    }
}