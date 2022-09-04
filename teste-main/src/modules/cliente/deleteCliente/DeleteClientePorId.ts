import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class DeleteClientePorId {
    async execute(req: Request, res: Response) {
        const clienteNaoExiste = await prisma.cliente.findUnique({
            where: {
                //@ts-ignore
                id: req.query.id = parseInt(req.query.id)
            }
        })
        if (!clienteNaoExiste) {
            throw new AppError(`O Cliente com ID '${req.query.id}' não existe.`, 404)
        }

        const cliente = await prisma.cliente.delete({
            where: {
                //@ts-ignore
                id: Number(req.query.id)
            },
        });
        const result = (`Cliente'${cliente.nome}' com ID '${req.query.id}' foi excluida com sucesso`)

        return result
    }
}