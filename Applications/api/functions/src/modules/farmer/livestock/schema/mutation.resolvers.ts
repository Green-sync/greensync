import { db } from "../../../../utils/firbase.config";
import { UserDetails } from "../../../auth/contextDto";
import {LivestockService} from "../LivestockService"
import { LivestockInput } from "./livestockDto";

export const StockMutationResolver = {
    createStock: (_:any, arg: {stock: any}, context: {user:UserDetails}) =>{
        return LivestockService.addStock(arg.stock, context.user);
    },
    editLivestock: (_parent: unknown, args:
      { livestockId: string, updates: LivestockInput }) => {
      return LivestockService.updateLivestock(args.livestockId,args.updates);
    },
    deleteLivestock:  async (_parent: unknown, args:
      { livestockId: string; }, context: { user: any }) => {
  
      await db.collection('Livestocks').doc(args.livestockId).delete();
      return {
        success: true, message: "Livestock successfully deleted"
      }
    },
}