// import { CropsService } from "../CropsService"

import { db } from "../../../../utils";

export const CropsMutationResolver = {
    // createCrop: (_:any, arg: {crop: any}) => {

    //     return CropsService.addCrop(arg.crop);
    //  },

    //CROP Mutation 
    async createCrop(_:any, args: { input:any }) {
        const newCropData = {
          ...args.input,
          dateCreated: new Date().toISOString(),
        };
        const cropRef = await db.collection("crops").add(newCropData);
        const crop = await cropRef.get();
        
        // Add the cropId using the document ID from Firebase
        return {
          ...crop.data(),
        //   cropId: crop.id,
        //   farmId: farm.id,
        //   userId: user.id
        };
      },
      updateCrop: async (_:any,args: { cropId:string, input:any }) => {
        const cropDoc = db.collection('crops').doc(args.cropId);
        await cropDoc.update(args.input);
        const updatedCrop = await cropDoc.get();
        return updatedCrop.exists ? updatedCrop.data() : null;
      },
      deleteCrop: async (_:any, args: { cropId:string }) => {
        await db.collection('crops').doc(args.cropId).delete();
        return `Crop with ID ${args.cropId} has been deleted`;
      },
    
}