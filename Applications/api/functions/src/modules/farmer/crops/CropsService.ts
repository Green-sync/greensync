import { db } from "../../../utils";

export class CropsService {
  static async addCrop(crop: any) {
        // try {
          
        //   await db.collection("Crops").add(crop)
        //   return {
        //     message: "Crop details successfully added", success: true,
        //   };
        // } catch (error) {
        //   return {
        //     message: `${error} failed to add crop details`, success: false,
        //   };
        // }

        const cropRef = await db.collection('Crops').add({
          ...crop,
          userId: "1d1d12345" //context.uid
        });
        // Return the newly created crop with its ID
        return {
          message: "Crop details successfully added", success: true,
          id: cropRef.id, cropRef
        };
      } catch(error: any) {
        return {
          message: `${error} failed to add crop details`, success: false,
        };
      }

      static async getCropByUserId(userId: string): Promise<any> {

        const cropsRef = db.collection('Crops');
        const query = cropsRef.where('userId', '==', userId);
      
        const snapshot = await query.get();
        const crops: any[] = [];
      
        snapshot.forEach(doc => {
          crops.push({ id: doc.id, ...doc.data() });
        });
        console.log(crops);
      
        return crops;
    }

}