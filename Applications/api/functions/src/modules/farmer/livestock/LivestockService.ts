import { db } from "../../../utils";
import { UserDetails } from "../../auth/contextDto";
import { LivestockInput } from "./schema/livestockDto";

export class LivestockService {
  static async addStock(stock: any,user:UserDetails) {
    const livestockRef = await db.collection('Livestocks').add({
      ...stock,
      userId: user.uid
    });
    // Return the newly created livestock with its ID
    return {
      message: "Livestock details successfully added", success: true,
      id: livestockRef.id, livestockRef
    };
  } catch(error: any) {
    return {
      message: `${error} failed to add livestock details`, success: false,
    };

  }

  static async updateLivestock(livestockId: string, updates: LivestockInput) {
    try {

      // Update the farm document with the specified ID
      await db.collection('Livestocks').doc(livestockId).update({...updates});
      // Return a success message
      return {
        message: "Livestocks details successfully updated", success: true,
      };
    } catch (error) {
      // Return an error message
      return {
        message: `${error} failed to update livestock details`, success: false,
      };
    }
  }
  
  static async getLivestock(user: UserDetails): Promise<any> {

    const livestockRef = db.collection('Livestocks');
    const query = livestockRef.where('userId', '==', user.uid);
  
    const snapshot = await query.get();
    const livestocks: any[] = [];
  
    snapshot.forEach(doc => {
      livestocks.push({ id: doc.id, ...doc.data() });
    });
    console.log(livestocks);
  
    return livestocks;
}



}