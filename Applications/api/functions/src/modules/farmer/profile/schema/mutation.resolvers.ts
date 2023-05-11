import { ProfileService } from "../profileServices";
import { ProfileInput } from "./profileDto";

export const UserMutationResolver = {
    createUser: (_: any, arg: { profile: any }, context: {user : any}) => {
        return ProfileService.user(arg.profile, context.user);
    },
    editUser: (_parent: unknown, args:
        { profileId: string, updates: ProfileInput }) => {
        return ProfileService.editUser(args.profileId,args.updates);
      },

  
  }