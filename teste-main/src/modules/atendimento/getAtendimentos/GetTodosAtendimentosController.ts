import { Request, Response } from "express";
import { GetTodosAtendimentos } from "./GetTodosAtendimentos";


export class GetTodosAtendimentosController {
    async handle(req: Request, res: Response) {
        const getTodosAtendimentos = new GetTodosAtendimentos();

        const result = await getTodosAtendimentos.execute();

        return res.status(200).json(result);
    }
}