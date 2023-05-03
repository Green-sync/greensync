// import { FarmService } from "../farmService"

import { db } from "../../../../utils";


export const FarmMutationResolver = {
    // createFarm: (_:any, arg: {farm: any}) => {

    //     return FarmService.addFarm(arg.farm);
    //  },

    //Farm Mutation
    createFarm: async (_:any, args: { input:any }) => {
        const newFarm = {
          ...args.input,
          farmId: db.collection('farms').doc().id,
          dateCreated: new Date().toISOString(),
        };
        await db.collection('farms').doc(newFarm.farmId).set(newFarm);
        return newFarm;
      },
      updateFarm: async (_:any, args: { farmId: string, input: any }) => {
        const farmRef = db.collection('farms').doc(args.farmId);
        const farmDoc = await farmRef.get();
  
        if (!farmDoc.exists) {
          throw new Error(`Farm with ID ${args.farmId} not found.`);
        }
  
        const updatedFarm = {
          ...farmDoc.data(),
          ...args.input,
        };
  
        await farmRef.update(updatedFarm);
  
        return updatedFarm;
      },

    
}