import { PrismaClient, User, Ingresso, Tipo } from "@prisma/client";
import { Prisma } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {

    public async verifyUser(email:string): Promise<boolean> {
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if(user){
            return true;
        }
        return false;
    }

    //CADASTRO DE USUÁRIO

    public async createUser(user: User): Promise<User> {
        const newUser = await prisma.user.create({
            data: user
        });
        return newUser;
    }

    public async getUserById(id: number): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                idUser: id
            }
        });
        return user;
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        });
        return user;
    }

    //LOGIN DE USUÁRIO

    public async loginUser(email: string, senha: string): Promise<boolean> {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
                password: senha
            }
        });
        if(user){
            return true;
        }
        return false;
    }

    



}