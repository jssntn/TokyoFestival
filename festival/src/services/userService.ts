import { PrismaClient, User, Ingresso, Tipo } from "@prisma/client";
import { Prisma } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {

    public async checkEmail(email:string): Promise<boolean> {
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

    public async createUser(name:string, age: number, email:string, password:string): Promise<User> {
        
        const newUser = await prisma.user.create({
            data: {
                name: name,
                age: age,
                email: email,
                password: password
            }
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

    public async loginUser(email: string, senha: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
                password: senha
            }
        });
        return user;
    }





}

export default new UserService();