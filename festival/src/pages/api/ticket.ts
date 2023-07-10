import ticketController from "@/controllers/ticketController";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    switch(req.method){
        case "POST":
            await ticketController.sellTicket(req, res);
            break;
        case "GET":
            await ticketController.getTipos(req, res);
            break;
        default:
            res.status(405).json({message: "Method not allowed"});
            break;
    }
}