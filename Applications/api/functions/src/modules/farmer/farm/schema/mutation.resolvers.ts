import { db } from "../../../../utils/firbase.config";
import { FarmService } from "../farmService"
import { FarmInput } from "./farmDto";




export const FarmMutationResolver = {
  createFarm: (_: any, arg: { farm: any }) => {
    return FarmService.addFarm(arg.farm);
  },
  editFarm: (_parent: unknown, args:
    { farmId: string, updates: FarmInput }) => {
    return FarmService.updateFarm(args.farmId,args.updates);
  },
  deleteFarm: async (_parent: unknown, args:
    { farmId: string; }, context: { user: any }) => {
    await db.collection('Farms').doc(args.farmId).delete();
    return {
      success: true, message: "successfully deleted"
    }
  },


}