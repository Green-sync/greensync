import { gql } from "@apollo/client";

export const GET_FARM = gql`
query GetFarmByUserId($userId: ID!) {
  getFarmByUserId(userId: $userId) {
    name
    location
    size
    description
  }
}
`