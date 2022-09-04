import { Request, Response } from "express";
import { PostProduto } from "./PostProduto";



export class PostProdutoController {
    async handle(req: Request, res: Response) {

        const { nome, marca, preco } = req.body;

        const postCliente = new PostProduto();

        const result = await postCliente.execute({ nome, marca, preco });

        return res.status(201).json(result)
    }
}