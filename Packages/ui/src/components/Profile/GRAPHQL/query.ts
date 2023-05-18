import { gql } from "@apollo/client";

export const GET_FARM = gql`
query Query($userId: ID!) {
    getFarmByUserId(userId: $userId) {
      farmId
      userId
      name
      location
      size
      description
    }
  }
`