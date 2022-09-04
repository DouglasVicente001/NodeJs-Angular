import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class GetClientesPorId {
    async execute(req: Request, res: Response) {
        const cliente = await prisma.cliente.findUnique({
            where: {

                id: Number(req.body.id)
            },
        })
        if (cliente == null) {
            throw new AppError(`O cliente '${req.body.id}' não foi encontrado.`, 404)
        }
        return cliente;
    }
}