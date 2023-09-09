import sequelize from "../db";
import { Users } from "../models/user.model";

export const Query = {
    getUsers: {
        resolve: async () => {
            const users = await Users.findAll();
            return { list: users };
        },
    }
}