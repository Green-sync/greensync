import {env} from "process";
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault
} from "@apollo/server/plugin/landingPage/default";
import {ApolloServerPluginLandingPageDisabled} from "@apollo/server/plugin/disabled";
export const LandingPagePluginConfig = () => {
    if (env.NODE_ENV==="production" && env.PLAYGROUND==="true") {
         return ApolloServerPluginLandingPageProductionDefault({
            graphRef: "",   
            footer: false,
                // @ts-ignore
               embed: {
                   persistExplorerState:true,
               }
            })

    }else if (env.NODE_ENV==="production" && env.PLAYGROUND===undefined){
        return  ApolloServerPluginLandingPageDisabled();
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

