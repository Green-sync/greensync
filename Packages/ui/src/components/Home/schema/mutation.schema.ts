import { gql } from "@apollo/client";

export const ADD_PROFILE= gql`
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

export const UPDATE_PROFILE = gql`
mutation Mutation($updates: ProfileInput, $profileId: ID) {
  editUser(updates: $updates, profileId: $profileId) {
    success
    message
    profile {
      firstName
      lastName
      email
      phone
      homeAddress
      farmIds
    }
  }
}
`