import { db } from "../../../../utils";

export const userMutationResolver = {
    createUser: async (_:any, args: { input: any }) => {
        const newUser = {
          ...args.input,
          userId: db.collection('users').doc().id,
          dateCreated: new Date().toISOString(),
        };
        await db.collection('users').doc(newUser.userId).set(newUser);
        return newUser;
      },
      updateUser: async (_:any, args: { userId: string, input: any }) => {
        const userRef = db.collection('users').doc(args.userId);
        const userDoc = await userRef.get();
  
        if (!userDoc.exists) {
          throw new Error(`User with ID ${args.userId} not found.`);
        }
  
        const updatedUser = {
          ...userDoc.data(),
          ...args.input,
        };
  
        await userRef.update(updatedUser);
  
        return updatedUser;
      },
    
}