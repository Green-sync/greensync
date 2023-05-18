import { gql } from "@apollo/client";

export const GET_PROFILE= gql`
query GetProfile {
    getProfile {
      message
      success
      profile {
        firstName
        email
        lastName
        phone
      }
    }
  }  
`;