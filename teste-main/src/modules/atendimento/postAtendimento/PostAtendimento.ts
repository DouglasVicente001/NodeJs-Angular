import { prisma } from "../../../prisma/client";
import { IPostAtendimentosDTO } from "../../dtos/postAtendimentosDTO";
import { AppError } from "../../errors/AppError";


export class PostAtendimento {

    async execute({ atendimento }: IPostAtendimentosDTO): Promise<void> {
        try {

            await prisma.atendimento.create({
                data: {
                    clienteId: atendimento.clienteId,
                    produtos: {
                        //@ts-ignore
                        create: atendimento.produtos
                    }
                }
            });
        } catch {
            throw new AppError(`Algo deu errado, os Id's foram selecionados de forma correta?`, 404)
        }
    }
}
