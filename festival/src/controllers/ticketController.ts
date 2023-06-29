import {PrismaClient} from '@prisma/client';
import ticketService from "@/services/ticketService";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default {

    async sellTicket(req: NextApiRequest, res: NextApiResponse){
        try{
            //verifica a disponibilidade
            console.log("entrei no controller");
            if(!(await ticketService.verificaDisponibilidade())){
                return res.status(400).json({message: "Ingressos esgotados"});
            }
            console.log("passei da verificação");

            //vende o ingresso
            const ticket = await ticketService.createTicket(req.body);
            return res.status(200).json(ticket);
        }catch(error){
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
              } 
                return res.status(500).json({ message: "unknown error" });
        }
    }
    
}