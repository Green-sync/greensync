import { UserDetails } from "../../../auth/contextDto";
import { CropsService } from "../CropsService";

export const CropsQueryResolver = {
    getCrop: async (_parent: unknown, __:any, context: { user: any }) => {
    
        return CropsService.getCrop(context.user);
     },
     getCropByfarmId: async(_:unknown, args: {farmId: string}, context: {user: UserDetails})=>{
        return CropsService.getCropByfarmId(args.farmId, context.user)

     }
}