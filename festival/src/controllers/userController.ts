import {PrismaClient} from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import UserService from '@/services/userService';

const prisma = new PrismaClient();

export default {

    async CreateUser(req: NextApiRequest, res: NextApiResponse){
        try{
            if(!(await UserService.checkEmail(req.body.email))){
                const newUser = await prisma.user.create({
                    data: req.body
                });
                return res.status(201).json(newUser);
            }
            return res.status(400).json({message: "Email já cadastrado"});
        }
        catch(error){
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
              } 
                return res.status(500).json({ message: "unknown error" });
              
        }
    },

    async UserLogin(req: NextApiRequest, res: NextApiResponse){
        try{
            //verifica a existencia do usuário
            if(!(await UserService.checkEmail(req.body.email))){
                return res.status(400).json({message: "Email não cadastrado"});
            }

            //login
            const user = await UserService.loginUser(req.body.email, req.body.password);

            if(user){
                return res.status(200).json(user);
            }

            return res.status(400).json({message: "Senha incorreta"});
        }
        catch(error){
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
              } 
                return res.status(500).json({ message: "unknown error" });
              
        }
    },
    
}