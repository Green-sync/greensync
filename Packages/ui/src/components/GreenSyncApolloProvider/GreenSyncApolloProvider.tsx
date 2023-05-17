import { ApolloProvider } from "@apollo/client"
import { graphQL } from "../../utils"

export const GreenSyncApolloProvider = ({children}:any) => {
    return <ApolloProvider client={graphQL}>
        {children}
    </ApolloProvider>
}

export default GreenSyncApolloProvider;