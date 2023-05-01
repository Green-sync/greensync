import {env} from "process";
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault
} from "@apollo/server/plugin/landingPage/default";
import {ApolloServerPluginLandingPageDisabled} from "@apollo/server/plugin/disabled";

export const LandingPagePluginConfig = () => {
    if (env.NODE_ENV==="production") {
         return env.PLAYGROUND=='true'?ApolloServerPluginLandingPageProductionDefault({
            graphRef: "",    
            footer: false,
                // @ts-ignore
               embed: {
                   persistExplorerState:true,

               }
            }): ApolloServerPluginLandingPageDisabled()

    } else {
             return ApolloServerPluginLandingPageLocalDefault({ footer: false })
    }
}


export  const  introspect = (): boolean=> {
    if (env.NODE_ENV ==="production" && env.PLAYGROUND=="true") {
        return true
    }
    else if (env.NODE_ENV==="development"){
        return  true

    }
    return  false
}

