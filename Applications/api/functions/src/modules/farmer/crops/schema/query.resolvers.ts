import { CropsService } from "../CropsService";

export const CropsQueryResolver = {
    getCrop: async (_parent: unknown, __:any, context: { user: any }) => {
    
        return CropsService.getCrop(context.user);
     },
}