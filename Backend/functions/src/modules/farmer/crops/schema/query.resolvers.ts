import { db } from "../../../../utils";

export const CropsQueryResolver = {

    getCrop: async (_: unknown, args: { cropId: string }) => {
        const cropDoc = await db.collection('crops').doc(args.cropId).get();
        return cropDoc.exists ? cropDoc.data() : null;
    },
    getCrops: async () => {
        const cropsSnapshot = await db.collection('crops').get();
        return cropsSnapshot.docs.map(doc => ({ cropId: doc.id, ...doc.data() }));
    },

}