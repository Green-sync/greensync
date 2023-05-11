import { ProfileService } from "../profileServices";

export const UserQueryResolver = {
    getUserByUserId: async (_parent: unknown, args:
        { userId: string; }, context: { user: any }) => {
    
        return ProfileService.getUserByUserId(args.userId);
     },
    
  
  
  
}