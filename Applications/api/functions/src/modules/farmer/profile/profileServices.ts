import { db } from "../../../utils/firbase.config";
import { ProfileInput } from "./schema";


export class ProfileService {
    static async user(profile: any) {
        // Create a new document in the "farms" collection with the specified user ID and farm details
        const userRef = await db.collection('User').add({
          ...profile,
          
        });
        // Return the newly created farm with its ID
        return {
          message: "User details successfully added", success: true,
          id: userRef.id, userRef
        };
      } catch(error: any) {
        return {
          message: `${error} failed to add user details`, success: false,
        };
      }


      static async editUser(profileId: string, updates: ProfileInput) {
        try {
    
          // Update the farm document with the specified ID
          await db.collection('User').doc(profileId).update({...updates});
          // Return a success message
          return {
            message: "User details successfully updated", success: true,
          };
        } catch (error) {
          // Return an error message
          return {
            message: `${error} failed to update user details`, success: false,
          };
        }
      }
  }