
import { db } from "../../../utils/firbase.config";
import { UserDetails } from "../../auth/contextDto";
import { ProfileInput } from "./schema";


export class ProfileService {
    static getUserByUserId(userId: string) {
        throw new Error("Method not implemented.");
    }
    static async  getProfile(user: UserDetails) {
      try {
        const data = (await db.collection("User").doc(user.uid).get()).data()
        if(data){
          return {message: "", success: true, profile:data}
        }
        return {
          message: "No User At all", success: false
        }
      } catch (error) {
        return {
          message: `${error} ${user.uid}`, success: false
        }
      }
    }
    static async createUser(profile: any, user: any) {
      try {
         await db.collection('User').doc(user.uid).set({
          ...profile,
        });
        // Return the newly created farm with its ID
        return {
          message: "User details successfully added", success: true,
         
      //   };
      }} catch(error: any) {
        return {
          message: `${error} failed to add user details`, success: false,
        };


        }
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