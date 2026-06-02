import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express4';
import { Request, Response } from 'express';

import typeDefs from './schema/schema-manager';
import resolvers from './resolvers';

const PORT = process.env.PORT || 4002;

const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

async function startServer() {
  const app = express();

  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(null, false);
        }
      },
      credentials: true,
    })
  );

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req, res }: { req: Request; res: Response }) => ({ 
        req, 
        res 
      }),
    })
  );

  app.listen(PORT, () => {
    console.log(`🚀 R+ Solutions GraphQL server running at http://localhost:${PORT}/graphql`);
  });
}

startServer();