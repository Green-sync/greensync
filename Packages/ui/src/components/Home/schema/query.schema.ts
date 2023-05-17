import { gql } from "@apollo/client";

export const GET_PROFILE= gql`
query GetProfile {
    getProfile {
      message
      success
      profile {
        firstName
        farmIds
        email
        lastName
        phone
      }
    }
  }  
`;