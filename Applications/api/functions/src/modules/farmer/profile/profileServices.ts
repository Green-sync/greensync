
import { db } from "../../../utils/firbase.config";
import { UserDetails } from "../../auth/contextDto";
import { ProfileInput } from "./schema";


export class ProfileService {
    static async user(profile: any, user: UserDetails) {

            const { userId, name, surname, email, PhoneNumbers, password, website, photoURL, homeAddress, farms } = profile;
            
            try {
              const profileRef = db.collection('User').doc(user.uid);
              const profileData = {
                userId,
                name,
                surname,
                email,
                PhoneNumbers,
                password,
                website,
                photoURL,
                homeAddress,
                farms: farms.map((farm: { name: any; location: any; size: any; description: any; crops: { name: any; quantity: any; }[]; livestocks: { name: any; count: any; }[]; }) => ({
                  name: farm.name,
                  location: farm.location,
                  size: farm.size,
                  description: farm.description,
                  crops: farm.crops ? farm.crops.map((crop: { name: any; }) => ({
                    name: crop.name,
                    
                  })) : [],
                  livestocks: farm.livestocks ? farm.livestocks.map((livestock: { name: any; }) => ({
                    name: livestock.name,
                    
                  })) : [],
                })),
              };
              
              await profileRef.set(profileData);
              
              return profileRef.id;
            

        
        



        // Create a new document in the "farms" collection with the specified user ID and farm details
        //   await db.collection('User').doc(user.uid).set({
        //   ...profile,
          

        // });



        



        // Return the newly created farm with its ID
        
      //   return {
      //     message: "User details successfully added", success: true,
         
      //   };
      } catch(error: any) {
        return {
          message: `${error} failed to add user details`, success: false,
        };

    
   
      
      //   const {
      //     userId,
      //     name,
      //     surname,
      //     email,
      //     PhoneNumbers,
      //     password,
      //     website,
      //     photoURL,
      //     homeAddress,
      //     farms,
      //   } = profile;
  
      //   try {
      //     const profileRef = db.collection('profiles').doc();
      //     const profileData = {
      //       userId,
      //       name,
      //       surname,
      //       email,
      //       PhoneNumbers,
      //       password,
      //       website,
      //       photoURL,
      //       homeAddress,
      //       farms: farms.map((farm: { crops: any; livestocks: any; }) => ({
      //         ...farm,
      //         crops: farm.crops ? farm.crops : [],
      //         livestocks: farm.livestocks ? farm.livestocks : [],
      //       })),
      //     };
  
      //     await profileRef.set(profileData);
  
      //     return profileRef.id;
      //   } catch (error) {
      //     console.error('Error creating profile:', error);
      //     throw new Error('Failed to create profile');
      //   }
        }
      }

      
    


      static async editUser(profileId: string, updates: ProfileInput) {
        try {
    
          // Update the farm document with the specified ID
          await db.collection('User').doc(profileId).update({...updates});
          // Return a success message
          return {
            message: "User details successfully updated", success: true,
          };
        } catch (error) {
          // Return an error message
          return {
            message: `${error} failed to update user details`, success: false,
          };
        }
      }

      static async getUserByUserId(userId: string): Promise<any> {

        const farmsRef = db.collection('User');
        const query = farmsRef.where('userId', '==', userId);
    
        const snapshot = await query.get();
        const user: any[] = [];
    
        snapshot.forEach(doc => {
          user.push({ id: doc.id, ...doc.data() });
        });
        console.log(user);
    
        return user;
      }
  }