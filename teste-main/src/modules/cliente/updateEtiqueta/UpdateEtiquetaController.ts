import { Request, Response } from "express";
import { UpdatePalavras } from "./UpdateEtiqueta";


export class UpdateEtiquetaController {
    async handle(req: Request, res: Response) {
        const updateEtiqueta = new UpdatePalavras();

        const result = await updateEtiqueta.execute(req);

        return res.status(200).json(result)
    }
}