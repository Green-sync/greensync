import { db } from "../../../../utils";

//import {LivestockService} from "../LivestockService"
export const StockMutationResolver = {
    // createStock: (_:any, arg: {stock: any}) =>{
    //     return LivestockService.addStock(arg.stock);
    // },

    //Livestock Mutation 
    createLivestock: async (_:any, args: { input:any }) => {
        const newLivestockData = {
          ...args.input,
          dateCreated: new Date().toISOString(),
        };
        const livestockRef = await db.collection("livestocks").add(newLivestockData);
        const livestock = await livestockRef.get();
        
        return {
          ...livestock.data(),
          livestockId: livestock.id,
        };
      },
      updateLivestock: async (_:any, args: { livestockId:string, input:any }) => {
        const livestockRef = db.collection("livestocks").doc(args.livestockId);
        await livestockRef.update(args.input);
        
        const updatedLivestock = await livestockRef.get();
        
        return {
          ...updatedLivestock.data(),
          livestockId: updatedLivestock.id,
        };
      },
      deleteLivestock: async (_:any, args: { livestockId: string }) => {
        const livestockRef = db.collection("livestocks").doc(args.livestockId);
        const deletedLivestock = await livestockRef.get();
        
        await livestockRef.delete();
        
        return {
          ...deletedLivestock.data(),
          livestockId: deletedLivestock.id,
        };
      },
}