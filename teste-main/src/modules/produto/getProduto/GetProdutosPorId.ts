import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class GetProdutosPorId {
    async execute(req: Request, res: Response) {
        const produto = await prisma.produto.findUnique({
            where: {

                id: Number(req.body.id)
            },
        })
        if (produto == null) {
            throw new AppError(`O produto '${req.body.id}' não foi encontrado.`, 404)
        }
        return produto;
    }
}