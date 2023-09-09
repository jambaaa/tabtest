import pkg from '@apollo/client';
const { gql } = pkg;


import {
  mutations as userMutations,
  queries as userQueries,
  types as userTypes,
} from './user';


const types = `
    ${userTypes}
`;

const queries = `
    type Query {
        ${userQueries}
    }
`;

const mutations = `
    type Mutation {
        ${userMutations}
    }
`;

const typeDefs = gql(`${types} ${queries} ${mutations}`);

export default typeDefs;
