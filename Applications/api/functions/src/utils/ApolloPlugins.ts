import {env} from "process";
import {
    // ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault
} from "@apollo/server/plugin/landingPage/default";
import {ApolloServerPluginLandingPageDisabled} from "@apollo/server/plugin/disabled";
export const LandingPagePluginConfig = () => {
    if (env.PLAYGROUND==="true") {
         return ApolloServerPluginLandingPageProductionDefault({
            graphRef: "",   
            footer: false,
                // @ts-ignore
               embed: {
                   persistExplorerState:true,
               }
            })

    }
    return  ApolloServerPluginLandingPageDisabled();

}


export  const  introspect = (): boolean=> {
    if (env.PLAYGROUND=="true") {
        return true
    }
    return  false
}

