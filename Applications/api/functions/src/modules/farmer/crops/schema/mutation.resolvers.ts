import { db } from "../../../../utils/firbase.config";
import { CropsService } from "../CropsService"
import { CropInput } from "./cropDto";

export const CropsMutationResolver = {
    createCrop: (_:any, arg: {crop: any}) => {

        return CropsService.addCrop(arg.crop);
     },
     editCrop: (_parent: unknown, args:
      { cropId: string, updates: CropInput }) => {
      return  CropsService.updateCrop(args.cropId,args.updates);
    },
     deleteCrop: async (_parent: unknown, args:
      { cropId: string; }, context: { user: any }) => {
  
      await db.collection('Crops').doc(args.cropId).delete();
      return {
        success: true, message: "successfully deleted"
      }
    },
    
}