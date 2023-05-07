import { db } from "../../../utils";

export class FarmService {

  static async addFarm(farm: any) {
    // try {

    //     await db.collection("Farms").add(farm)
    //   return {
    //     message: "Farm details successfully added", success: true,
    //   };
    // } catch (error) {
    //   return {
    //     message: `${error} failed to add farm details`, success: false,
    //   };
    // }

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

}