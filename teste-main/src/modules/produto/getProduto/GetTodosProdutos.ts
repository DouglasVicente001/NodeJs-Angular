import { Cliente, Produto } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class GetTodosProdutos {
    async execute(): Promise<Produto[]> {
        const produto = await prisma.produto.findMany({
            orderBy: {
                marca: "asc"
            }
        });
        if (produto.length == 0) {
            throw new AppError('Nenhum produto cadastrado', 404);
        }

        return produto;
    }
}