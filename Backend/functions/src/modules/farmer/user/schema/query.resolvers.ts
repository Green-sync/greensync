import { db } from "../../../../utils";

export const UserQueryResolver = {
    getUser: async (_:any, args:{ userId: string }) => {
        const userDoc = await db.collection('users').doc(args.userId).get();
        return userDoc.exists ? userDoc.data() : null;
      },
      getUsers: async () => {
        const usersSnapshot = await db.collection('users').get();
        return usersSnapshot.docs.map(doc =>({ userId: doc.id, ...doc.data() }));
      },
}