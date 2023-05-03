import { db } from "../../../utils";

export class UserService {
 
    static async addUser(user: any) {
        try {
          
            await db.collection("User").add({...user})
          return {
            message: "User details successfully added", success: true,
          };
        } catch (error) {
          return {
            message: `${error} failed to add user details`, success: false,
          };
        }
      }

}