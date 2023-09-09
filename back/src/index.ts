import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema';

import { Users } from './models/user.model';
import sequelize from './db';
import resolvers from './resolvers';
import { hashPassword } from './utils/secret';

(async () => {
  await sequelize.sync({ force: true });
  const hashedPassword = hashPassword('pass1234'); // TODO: use .env
  const admin = await Users.create({ username: 'admin', email: 'admin@tabtest.com', password: hashedPassword });
  console.log(admin.toJSON());
})();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);