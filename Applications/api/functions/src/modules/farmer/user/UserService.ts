import { db } from "../../../utils";

export class UserService {
 
    static async addUser(user: any) {
        try {
          
            const a = await db.collection("User").add({...user})
            console.log(a)
          return {
            message: "User details successfully added", success: true,
          };
        } catch (error) {
          console.log(error)
          return {
            message: `${error} failed to add user details`, success: false,
          };
        }
      }

}