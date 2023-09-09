import { Users } from "../models/user.model";
import { checkPassword } from '../utils/secret';

export const Mutation = {
    login: {
        resolve: async (args: { email: string; password: string; }) => {
            console.log("What are there: ", args);
            const user = await Users.findOne({where: {email: args.email}});

            if(!user || !checkPassword(args.password, user.password)) {
                throw Error("Invalid email or password.");
            }
            
            return user;
        }
    },
    signupUser: {
        resolve: async (args) => {
            const user = await Users.create({email: args.email, password: args.password});
            return user;
        },
    }
}