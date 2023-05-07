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

}