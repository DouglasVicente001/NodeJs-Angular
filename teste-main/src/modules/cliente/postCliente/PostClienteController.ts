import { Request, Response } from "express";
import { PostCliente } from "./PostCliente";


export class PostClienteController {
    async handle(req: Request, res: Response) {

        const { nome, email, cep } = req.body;

        const postCliente = new PostCliente();

        const result = await postCliente.execute({ nome, email, cep });

        return res.status(201).json(result)
    }
}