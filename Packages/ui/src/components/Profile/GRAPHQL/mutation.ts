import { gql } from "@apollo/client";


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
    }
  }
}
`