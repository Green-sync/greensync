import { CropsService } from "../CropsService";

export const CropsQueryResolver = {
    // getCrop: (_:unknown, __:unknown, context: {user:any, db: any}) => { 
    //     return context? {message:`Welcome to the crops world ${context}`}: {message:'Unauthorized'};
    // },
    getCrop: async (_parent: unknown, __:any, context: { user: any }) => {
    
        return CropsService.getCrop(context.user);
     },
}