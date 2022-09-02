import { Cliente } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../errors/AppError";

export class GetTodosClientes {
    async execute(): Promise<Cliente[]> {
        const cliente = await prisma.cliente.findMany({
            orderBy: {
                email: "asc"
            }
        });
        if (cliente.length == 0) {
            throw new AppError('Nenhum cliente cadastrado', 404);
        }

        return cliente;
    }
}