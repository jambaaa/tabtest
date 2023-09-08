import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema';

import { User } from './models/user.model';
import sequelize from './db';
import resolvers from './resolvers';

(async () => {
  await sequelize.sync({ force: true });

  const admin = await User.create({ username: 'admin', email: 'admin@tabtest.com', password: "pass1234" });
  console.log(admin.toJSON());
})();

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);