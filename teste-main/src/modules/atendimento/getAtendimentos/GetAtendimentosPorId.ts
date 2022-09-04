import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class GetAtendimentosPorId{
    async execute(req: Request, res: Response) {
        const atendimento = await prisma.atendimento.findUnique({
            where: {
                id: Number(req.body.id)
            },
            
            include: {
                cliente: {
                    select: {
                        nome: true,
                        email: true,
                        cep: true,
                    },
                },
                produtos: {
                    select: {
                        produto: {
                            select: {
                                nome: true,
                                marca: true,
                                preco: true
                                
                            }
                        }
                    }
                }
            }
        })
        if (atendimento == null) {
            throw new AppError(`O atendimento '${req.query.atendimento}' não foi encontrada.`, 404)
        }

        return atendimento;
    }
}
