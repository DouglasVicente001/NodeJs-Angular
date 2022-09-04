import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class DeleteProdutoPorId {
    async execute(req: Request, res: Response) {
        const produtoNaoExiste = await prisma.produto.findUnique({
            where: {
                //@ts-ignore
                id: req.query.id = parseInt(req.query.id)
            }
        })
        if (!produtoNaoExiste) {
            throw new AppError(`O produto com ID '${req.query.id}' não existe.`, 404)
        }

        const produto = await prisma.produto.delete({
            where: {
                //@ts-ignore
                id: Number(req.query.id)
            },
        });
        const result = (`Produto '${produto.nome}' com ID '${req.query.id}' foi excluida com sucesso`)

        return result
    }
}