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
        phone: String
        address: String
        birthDate: String
        gender: Boolean
        role: String
    }

    type UserListResponse {
        list: [User]
        totalCount: Int
    }
`;

export const queries = `
    getUsers(searchValue: String, perPage: Int, page: Int): UserListResponse
`;

export const mutations = `
    signupUser(email: String, password: String): User
    login(email: String, password: String): User
`;
