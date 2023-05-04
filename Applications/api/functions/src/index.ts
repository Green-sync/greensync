import * as functions from "firebase-functions";
import {ApolloServer} from "@apollo/server"
import express from "express"
import cors, {CorsRequest} from "cors"

const greensyncApp = express()
import dotenv from "dotenv"
import {ExpressContextFunctionArgument, expressMiddleware} from "@apollo/server/express4"
import {QueryResolvers, MutationResolver} from "./resolvers"
import {MainSchema} from "./schema";
import {db, introspect, LandingPagePluginConfig} from "./utils";
import {AuthService} from "./modules/auth/AuthService";

dotenv.config()
const resolvers = {
    Query: {
        ...QueryResolvers
    },
    Mutation: {
        ...MutationResolver
    }
}

interface GreenContext {
    db?: any
    token?: String
    user?: any
    res?: Response
    req?: Request
}

const greenApp = async () => {
    
    const server = new ApolloServer<GreenContext>({
        typeDefs: MainSchema,
        resolvers,
        // introspection: ),
        introspection: introspect(),
        plugins: [
            LandingPagePluginConfig()
        ]
    })
    await server.start()
    greensyncApp.use("/", cors<CorsRequest>(), express.json(), expressMiddleware(server, {
        context: async ({req, res}: ExpressContextFunctionArgument) => {
            const user = await AuthService.isAuthenticated(req, res)
            return user ?? {
                user,
                res,
                req,
                db
            }
        }
    }))
}
greenApp().then(() => {
})
export const greensync = functions.https.onRequest(greensyncApp);
export const playground = functions.https.onRequest(greensyncApp);
