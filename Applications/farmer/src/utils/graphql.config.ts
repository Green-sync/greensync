import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


const env = import.meta.env

const httpLink = createHttpLink({
    uri: env.VITE_REACT_GRAPHQL_URL
});

const authLink = setContext(async (_, { headers }): Promise<{ headers: { [key: string]: string } }> => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('_AgriTKN');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `AgriTechGreen ${token}` : "",
        }
    }
});

export const graphQL = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
