import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema/schema-manager'; // Importa todos os schemas juntos
import { resolvers } from './resolvers';        // Importa todos os resolvers juntos

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4002 },
    });

    console.log(`🚀 GraphQL Server ready at: ${url}`);
}

startServer();