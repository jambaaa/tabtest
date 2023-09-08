import { User } from "../models/user.model";

export const Query = {
    getUsers: {
        user: async () => {
            const users = await User.findAll();
            return users;
        },
    }
}