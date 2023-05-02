import { db } from "../../../../utils";

export const LivestockQueryResolver = {
    getLivestock: async (_:unknown, args:{ livestockId:string }) => {
        const livestockSnapshot = await db.collection("livestocks").doc(args.livestockId).get();
        return {
          ...livestockSnapshot.data(),
          livestockId: livestockSnapshot.id,
        };
      },
      getAllLivestock: async () => {
        const livestockSnapshot = await db.collection("livestocks").get();
        return livestockSnapshot.docs.map((doc:any) => ({
          ...doc.data(),
          livestockId: doc.id,
        }));
      },
}