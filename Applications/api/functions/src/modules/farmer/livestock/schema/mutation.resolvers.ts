import { db } from "../../../../utils/firbase.config";
import {LivestockService} from "../LivestockService"
export const StockMutationResolver = {
    createStock: (_:any, arg: {stock: any}) =>{
        return LivestockService.addStock(arg.stock);
    },
    deleteLivestock:  async (_parent: unknown, args:
      { livestockId: string; }, context: { user: any }) => {
  
      await db.collection('Livestocks').doc(args.livestockId).delete();
      return {
        success: true, message: "Livestock successfully deleted"
      }
    },
}