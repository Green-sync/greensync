import { db } from "../../../../utils";

export const FarmQueryResolver = {
        //Farm Query Resolvers
        getFarm: async (_:any, args:{ farmId: string }) => {
            const farmDoc = await db.collection('farms').doc(args.farmId).get();
            return farmDoc.exists ? farmDoc.data() : null;
          },
          getFarms: async () => {
            const farmsSnapshot = await db.collection('farms').get();
            return farmsSnapshot.docs.map(doc => ({farmid: doc.id, ...doc.data()}));
          },
          getFarmsByUserId: async (_:any, args:{ userId: string}) => {
            const farmsSnapshot = await db.collection('farms').where('userId', '==', args.userId).get();
            return farmsSnapshot.docs.map(doc => doc.data());
          },
      
}