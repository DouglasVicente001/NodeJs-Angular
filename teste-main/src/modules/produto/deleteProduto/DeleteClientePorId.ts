// import { Request, Response } from "express";
// import { prisma } from "../../../prisma/client";
// import { AppError } from "../../errors/AppError";

// export class DeleteClientePorId {
//     async execute(req: Request, res: Response) {
//         const clienteNoExiste = await prisma.cliente.findUnique({
//             where: {
//                id: Number(req.body.id)
//             }
//         });
//         if (!clienteNoExiste) {
//             throw new AppError(`Cliente com o ID '${req.query.id}' não existe.`, 404)
//         }

//         const cliente = await prisma.cliente.delete({
//             where: {
                
//                 id: Number(req.body.id)
//             }
//         });
//         const result = (`Cliente '${cliente.nome}' com ID '${req.query.id}' foi excluida com sucesso`)

//         return result
//     }
// }