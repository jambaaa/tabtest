export const types = `
    type DeleteResponse {
        n: Int
        ok: Int
        deletedCount: Int
    }

    type User {
        _id: String
        name: String
        email: String
        phone: Number
        address: String
        birthDate: Date
        gender: Boolean
        role: String
    }

    type UserListResponse {
        list: [User]
        totalCount: Int
    }
`;

export const queries = `
    users(searchValue: String, perPage: Int, page: Int): UserListResponse
    userDetail(_id: String!): User
    permissions: JSON
`;

const mutationParams = `
    email: String,
`;

export const mutations = `
    login(email: String, password: String): String
    logout: String
    usersAdd(${mutationParams}, password: String): User
    usersEdit(_id: String!, ${mutationParams}): User
    usersChangePassword(currentPassword: String, newPassword: String): User
    usersRemove(_id: String!): DeleteResponse
`;
