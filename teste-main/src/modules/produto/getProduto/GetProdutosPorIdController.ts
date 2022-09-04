import { Request, Response } from "express";
import { GetProdutosPorId } from "./GetProdutosPorId";


export class GetProdutosPorIdController {
    async handle(req: Request, res: Response) {
        const getProdutosPorNome = new GetProdutosPorId();

        const result = await getProdutosPorNome.execute(req, res);

        return res.status(200).json(result)
    }
}