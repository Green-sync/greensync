import { ProfileService } from "../profileServices";
import { ProfileInput } from "./profileDto";

export const UserMutationResolver = {
    createUser: (_: any, arg: { profile: any }) => {
        return ProfileService.user(arg.profile);
    },
    editUser: (_parent: unknown, args:
        { profileId: string, updates: ProfileInput }) => {
        return ProfileService.editUser(args.profileId,args.updates);
      },

  
  }