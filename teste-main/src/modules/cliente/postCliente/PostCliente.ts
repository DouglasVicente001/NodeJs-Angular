
import { Cliente } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { IPostClientesDTO } from "../../dtos/postClientesDTO";
import { AppError } from "../../errors/AppError";

export class PostCliente {
    async execute({ nome, cep, email }: IPostClientesDTO): Promise<Cliente> {

        const usuarioExiste = await prisma.cliente.findUnique({
            where: {
                email
            }
        });
        if (usuarioExiste) {
            throw new AppError(`O email: '${email}' já está sendo utilizado.`, 409)
        }

        const cliente = await prisma.cliente.create({
            data: {
                email,
                cep,
                nome,

            }
        })
        return cliente;
    }
}