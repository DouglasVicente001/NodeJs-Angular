import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class DeleteAtendimentoPorId {
    async execute(req: Request, res: Response) {
        const atendimentoNaoExiste = await prisma.atendimento.findUnique({
            where: {
                //@ts-ignore
                id: req.query.id = parseInt(req.query.id)
            }
        })
        if (!atendimentoNaoExiste) {
            throw new AppError(`O atendimento com ID '${req.query.id}' não existe.`, 404)
        }

        const atendimento = await prisma.atendimento.delete({
            where: {
                //@ts-ignore
                id: Number(req.query.id)
            },
        });
        const result = (`atendimento '${atendimento.id}' com ID '${req.query.id}' foi excluida com sucesso`)

        return result
    }
}