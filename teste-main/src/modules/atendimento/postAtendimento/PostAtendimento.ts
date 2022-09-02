import { prisma } from "../../../prisma/client";
import { IPostAtendimentosDTO } from "../../dtos/postAtendimentosDTO";
import { AppError } from "../../errors/AppError";

export class PostAtendimento {
    async execute({ atendimento }: IPostAtendimentosDTO): Promise<void> {


        const clienteExistente = await prisma.atendimento.findUnique({
            where: {
                id: atendimento.clienteId
            },
        });
        if (clienteExistente) {
            throw new AppError(`Um dos id's ja cadastrado.`, 404)
        }


        // await prisma.atendimento.create({
        //     data: atendimento
        // });

        await prisma.atendimento.create({
            data: {
                clienteId: atendimento.clienteId,
                produtos: {
                    //@ts-ignore
                    create: atendimento.produtos
                }
            }
        });
    }
}
