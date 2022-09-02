

export interface IPostAtendimentosDTO {
    atendimento:
    {
        clienteId: number,
        produtos: [
            produto: {
                connect: {
                    id: number,
                }
            }
        ]
    }
}


