import { db } from "../../../utils";

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
  static async getFarmByUserId(userId: string) {
    // Assume 'db' is a reference to your Firestore instance
    const farmsArray: { id: string; }[] = [];
    const querySnapshot = await db.collection('Farms')
      .where('userId', '==', 'userId') // Replace with the desired user ID
      .get();

    // Iterate through the results and add each farm document to the array
    querySnapshot.forEach(doc => {
      farmsArray.push({ id: doc.id, ...doc.data() });
    });

    // Log the resulting array to the console
    console.log(farmsArray);
    return farmsArray
  }

}