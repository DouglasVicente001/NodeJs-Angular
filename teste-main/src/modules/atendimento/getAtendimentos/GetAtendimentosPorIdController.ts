import { Request, Response } from "express";
import { GetAtendimentosPorId } from "./GetAtendimentosPorId";


export class GetAtendimentosPorIdController {
    async handle(req: Request, res: Response) {
        const getAtendimentosPorId = new GetAtendimentosPorId();

        const result = await getAtendimentosPorId.execute(req, res);

        return res.status(200).json(result)
    }
}