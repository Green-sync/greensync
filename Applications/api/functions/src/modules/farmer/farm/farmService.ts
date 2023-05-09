import { db } from "../../../utils";
import { FarmInput } from "./schema/farmDto";


export class FarmService {

  static async addFarm(farm: any) {
    // Create a new document in the "farms" collection with the specified user ID and farm details
    const farmRef = await db.collection('Farms').add({
      ...farm,
      userId: "1d1d12345" //context.uid
    });
    // Return the newly created farm with its ID
    return {
      message: "Farm details successfully added", success: true,
      id: farmRef.id, farmRef
    };
  } catch(error: any) {
    return {
      message: `${error} failed to add farm details`, success: false,
    };
  }

  static async updateFarm(farmId: string, updates: FarmInput) {
    try {

      // Update the farm document with the specified ID
      await db.collection('Farms').doc(farmId).update({...updates});
      // Return a success message
      return {
        message: "Farm details successfully updated", success: true,
      };
    } catch (error) {
      // Return an error message
      return {
        message: `${error} failed to update farm details`, success: false,
      };
    }
  }

  static async getFarmByUserId(userId: string): Promise<any> {

    const farmsRef = db.collection('Farms');
    const query = farmsRef.where('userId', '==', userId);

    const snapshot = await query.get();
    const farms: any[] = [];

    snapshot.forEach(doc => {
      farms.push({ id: doc.id, ...doc.data() });
    });
    console.log(farms);

    return farms;
  }


}