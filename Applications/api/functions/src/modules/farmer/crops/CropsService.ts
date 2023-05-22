import { db } from "../../../utils";
import { UserDetails } from "../../auth/contextDto";
import { CommonService } from "../services/CommonServices";
import { CropInput } from "./schema/cropDto";

export class CropsService {
  static async addCrop(crop: any, user:UserDetails) {
       
        const cropRef = await db.collection('Crop').add({
          ...crop,
          userId: user.uid
        });

        await CommonService.generalCollectionMapper(cropRef.id, crop.farmId, 'Farm', "CropIds")
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
     
      static async updateCrop(cropId: string, updates: CropInput) {
        try {
    
          // Update the farm document with the specified ID
          await db.collection('Crop').doc(cropId).update({...updates});
          // Return a success message
          return {
            message: "Crop details successfully updated", success: true,
          };
        } catch (error) {
          // Return an error message
          return {
            message: `${error} failed to update crop details`, success: false,
          };
        }
      }

      static async getCrop(user: UserDetails): Promise<any> {

        const cropsRef = db.collection('Crop');
        const query = cropsRef.where('userId', '==', user.uid);
      
        const snapshot = await query.get();
        const crops: any[] = [];
      
        snapshot.forEach(doc => {
          crops.push({ id: doc.id, ...doc.data() });
        });
        console.log(crops);
      
        return crops;
    }

    static async getCropByfarmId(farmId: string,user: UserDetails): Promise<any> {

      const cropRef = db.collection('Crop');
      const query = cropRef.where('farmId', '==', farmId);
  
      const snapshot = await query.get();
      const crops: any[] = [];
  
      snapshot.forEach(doc => {
        crops.push({ id: doc.id, ...doc.data() });
      });
      console.log(crops);
  
      return crops;
    }

}