import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
mutation CreateUser($profile: ProfileInput) {
    createUser(profile: $profile) {
      message
      profile {
        email
        firstName
        lastName
        phone
      }
      success
    }
  }
  
`

export const ADD_FARM = gql`
mutation Mutation($farm: FarmInput) {
  createFarm(farm: $farm) {
    message
    success
  }
}

`