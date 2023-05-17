import { CropsService } from "../CropsService";

export const CropsQueryResolver = {
    getCrop: (_:unknown, __:unknown, context: {user:any, db: any}) => { 
        return context? {message:`Welcome to the crops world ${context}`}: {message:'Unauthorized'};
    },
    getCropByUserId: async (_parent: unknown, args:
        { userId: string; }, context: { user: any }) => {
    
        return CropsService.getCropByUserId(args.userId);
     },
}