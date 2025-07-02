import { expressMiddleware } from "@apollo/server/express4";
import { ApolloArmor } from "@escape.tech/graphql-armor";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import type { Express } from "express";
import type http from "http";
import cors from "cors";
import { json } from "body-parser";

import { buildSubgraphSchema } from "@apollo/subgraph";
import { resolvers, typeDefs } from "./schema";
import type { DataSources } from "./dataSources";
import { dataSources } from "./dataSources";

declare global {
    interface GraphQLContext {
        dataSources: DataSources;
    }
}

export async function runApolloServer(app: Express, httpServer: http.Server) {
    // @ts-ignore
    const schema = buildSubgraphSchema([{ typeDefs, resolvers }]);

    const armor = new ApolloArmor();
    const protection = armor.protect();

    const apolloServer = new ApolloServer<GraphQLContext>({
        schema,
        ...protection,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await apolloServer.start();

    app.use(
        "/graphql",
        cors<cors.CorsRequest>(),
        json(),
        expressMiddleware(apolloServer, {
            // eslint-disable-next-line zillow/@typescript-eslint/require-await
            context: async ({ req }) => ({
                authorization: req.headers.authorization as string,
                dataSources: dataSources(),
            }),
        }),
    );
}
