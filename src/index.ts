import "@abraham/reflection";

import { createYoga  } from 'graphql-yoga'
import {  GraphQLSchema } from "graphql";
import {  buildSchemaSync } from "type-graphql";

import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(import.meta.url + '/..');

async function start() {
try {

    const schema: GraphQLSchema = buildSchemaSync({
        resolvers: [__dirname + '**/**.resolver.{ts,js}'],
        emitSchemaFile: true,
    });

    const yoga = createYoga({
        schema,
        graphiql: true,
    })
    const server = Bun.serve(yoga)
    console.info(
        `Server is running on http://${server.hostname}:${server.port}${yoga.graphqlEndpoint}`,
    )
} catch (error) {
    console.log(error)
}
 
}

start()

