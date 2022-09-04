import { Request, Response } from "express";
import { GetTodosProdutos } from "./GetTodosProdutos";


export class GetTodosProdutosController {
    async handle(req: Request, res: Response) {
        const getTodosProdutos = new GetTodosProdutos();

        const result = await getTodosProdutos.execute();

        return res.status(200).json(result);
    }
}