import { Request } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class UpdateCliente {
    async execute(req: Request) {
        const clienteNaoExiste = await prisma.cliente.findUnique({
            where: {
                //@ts-ignore
                id: req.query.id = parseInt(req.query.id)
            }
        })

        if (!clienteNaoExiste) {
            throw new AppError(`O cliente com ID '${req.query.id}' não existe.`, 404)
        }

        const clienteJaExiste = await prisma.cliente.findUnique({
            where: {
                email: req.body.email
            }
        })

        if (clienteJaExiste) {
            throw new AppError(`O cliente ${req.body.cliente} já esta cadastrado.`, 409)
        }

        const cliente = await prisma.cliente.update({
            data: {
                nome: req.body.nome,
                email: req.body.email,
                cep: req.body.cep,

            },
            where: {
                //@ts-ignore
                id: req.query.id,

            }
        })

        const result = (`cliente '${cliente.email}' com ID '${req.query.id}' foi alterada com sucesso`)

        return result
    }
}