import { UserDetails } from "../../../auth/contextDto";
import { LivestockService } from "../LivestockService";

export const LivestockQueryResolver = {
    getLivestock: async (_parent: unknown, __: any, context: { user: UserDetails }) => {
        return LivestockService.getLivestock(context.user);
     },
     getLivestockById: async(_:unknown, args: {livestockId: string}, context: {user: UserDetails})=>{
        return LivestockService.getLivestockId(args.livestockId, context.user)

     },
     getLivestockByfarmId: async(_:unknown, args: {farmId: string}, context: {user: UserDetails})=>{
        return LivestockService.getLivestockId(args.farmId, context.user)

     }
    
}