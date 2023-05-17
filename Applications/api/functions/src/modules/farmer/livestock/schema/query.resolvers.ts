import { LivestockService } from "../LivestockService";

export const LivestockQueryResolver = {
    getLivestockByUserId: async (_parent: unknown, args:
        { userId: string; }, context: { user: any }) => {
    
        return LivestockService.getLivestockByUserId(args.userId);
     },
}