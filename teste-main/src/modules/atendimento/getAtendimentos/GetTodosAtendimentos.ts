
import { Atendimento } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class GetTodosAtendimentos {
    async execute(): Promise<Atendimento[]> {
        const atendimento = await prisma.atendimento.findMany({
            orderBy: {
                clienteId: "asc"
            },
            include: {
               produtos: {
                select: {
                    
                    produto: true,
                }
            }
        }})
        if (atendimento.length == 0) {
            throw new AppError('Nenhuma palavra cadastrada', 404)
        }

        return atendimento;
    }
}