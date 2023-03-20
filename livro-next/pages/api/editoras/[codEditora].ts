import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";


export default (req: NextApiRequest, res: NextApiResponse) => {
    const { codEditora } = req.query;
    try {
        if (req.method === 'DELETE') {
        const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));
        res.status(200).json({ nomeEditora });
        } else {
        res.status(405).json({ message: "Método não permitido" });
        }
    } catch (e) {
        res.status(500).json({ message: "Erro interno no servidor" });
    }
}