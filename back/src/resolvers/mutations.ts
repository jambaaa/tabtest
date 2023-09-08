import { User } from "../models/user.model";

export const Mutation = {
    signupUser: {
        user: async (args) => {
            const user = await User.create({email: args.email, password: args.password});
            return user;
        },
    }
}