import {env} from "process";
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault
} from "@apollo/server/dist/esm/plugin/landingPage/default";

export const LandingPagePluginConfig = () => {
    if (env.NODE_ENV==="production") {
        return  ApolloServerPluginLandingPageProductionDefault({
               graphRef: 'greensync@v1',
                footer: false,
                // @ts-ignore
               embed: env.PLAYGROUND=='true'&& {
                   endpointIsEditable: false
               }
            })

    } else {
            return ApolloServerPluginLandingPageLocalDefault({ footer: false })
    }
}
