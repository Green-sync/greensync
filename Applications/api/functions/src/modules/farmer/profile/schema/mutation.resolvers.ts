import { ProfileService } from "../profileServices";
import { ProfileInput } from "./profileDto";

export const UserMutationResolver = {
    createUser: (_: any, arg: { profile: any }, context: {user : any}) => {
        return ProfileService.createUser(arg.profile, context.user);
    },

    // createUser: async (_: any, args: { profile: any  }, context: {user : any}) => {
    //     const { userId, name, surname, email, PhoneNumbers, password, website, photoURL, homeAddress, farms } = args.profile;
        
    //     try {
    //       const profileRef = db.collection('profiles').doc();
    //       const profileData = {
    //         userId,
    //         name,
    //         surname,
    //         email,
    //         PhoneNumbers,
    //         password,
    //         website,
    //         photoURL,
    //         homeAddress,
    //         farms: farms.map((farm: { name: any; location: any; size: any; description: any; crops: { name: any; quantity: any; }[]; livestocks: { name: any; count: any; }[]; }) => ({
    //           name: farm.name,
    //           location: farm.location,
    //           size: farm.size,
    //           description: farm.description,
    //           crops: farm.crops ? farm.crops.map((crop: { name: any; quantity: any; }) => ({
    //             name: crop.name,
    //             quantity: crop.quantity,
    //           })) : [],
    //           livestocks: farm.livestocks ? farm.livestocks.map((livestock: { name: any; count: any; }) => ({
    //             name: livestock.name,
    //             count: livestock.count,
    //           })) : [],
    //         })),
    //       };
          
    //       await profileRef.set(profileData);
          
    //       return profileRef.id;
    //     } catch (error) {
    //       console.error('Error creating profile:', error);
    //       throw new Error('Failed to create profile');
    //     }
    //   },
    
    editUser: (_parent: unknown, args:
        { profileId: string, updates: ProfileInput }) => {
        return ProfileService.editUser(args.profileId,args.updates);
      },

  
  }