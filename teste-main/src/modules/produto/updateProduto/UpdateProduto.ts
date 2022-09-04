import { Request } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class UpdateProduto {
    async execute(req: Request) {
        const produtoNaoExiste = await prisma.produto.findUnique({
            where: {
                //@ts-ignore
                id: req.query.id = parseInt(req.query.id)
            }
        })

        if (!produtoNaoExiste) {
            throw new AppError(`A produto com ID '${req.query.id}' não existe.`, 404)
        }



        const produto = await prisma.produto.update({
            data: {
                nome: req.body.nome,
                marca: req.body.marca,
                preco: req.body.preco
            },
            where: {
                //@ts-ignore
                id: req.query.id,

            }
        })



        const result = (`Produto '${produto.nome}' com ID '${req.query.id}' foi alterada com sucesso`)

        return result
    }
}