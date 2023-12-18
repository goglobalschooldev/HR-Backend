import { ApolloServer } from '@apollo/server';
//@Appollo Server v4 with Subscriptions
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} from '@apollo/server/plugin/landingPage/default';

import { expressMiddleware } from '@apollo/server/express4';
import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import bodyParser from 'body-parser';
import cors from 'cors';
//@Merg Schema
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
//@General 
import 'dotenv/config'
import { connect } from 'mongoose'
import express from 'express';
import useragent from 'express-useragent';


const resolversFiles = loadFilesSync(path.join(__dirname, './graphql/resolvers'));
const typeDefsFiles = loadFilesSync(path.join(__dirname, './graphql/typeDefs'));

const resolvers = mergeResolvers(resolversFiles)
const typeDefs = mergeTypeDefs(typeDefsFiles)

async function startServer(typeDefs: any, resolvers: any) {

  await connect(`${process.env.MONGO_URI}`)
    .then(() => {
      console.log('DB Connected')
    })
    .catch(er => console.log('DB Connection Error', er));

  const app = express()
  app.use(useragent.express());
  const httpServer = createServer(app)

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const serverCleanup = useServer(
    {
      schema
    },
    wsServer,
  );
  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
      process.env.ENDPOINT_STATUS === 'production' ?
        ApolloServerPluginLandingPageProductionDefault({ footer: false })
        :
        ApolloServerPluginLandingPageLocalDefault({ footer: false })
    ],

  });

  await server.start();
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ req: req }),
    }),
  );

  httpServer.listen(+process.env.PORT, () => {
    console.log(`🚀 Server is now running on http://localhost:${+process.env.PORT}/graphql`);
  });
}

startServer(typeDefs, resolvers);
