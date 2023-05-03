import { db } from "../../../../utils";

export const userMutationResolver = {

  // createUser: (_:any, arg: {user: any}) => {

  //        return  UserService.addUser(arg.user);
  //     },
  
    createUser: async (_:any, args: { addUser: any }, context: {user: any}) => {
        const newUser = {
          ...args.addUser,
          dateCreated: new Date().toISOString(),
          ...context.user
          
        };
         await db.collection('users').add(newUser);
        console.log(newUser)
        // const a = await db.collection("User").add({...args.input})
        //  console.log(a)
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