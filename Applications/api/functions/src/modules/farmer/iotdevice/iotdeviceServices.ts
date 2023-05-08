import { db } from "../../../utils/firbase.config";

export class IotdeviceService {
    static async addIotdevice(device: any) {
        // Create a new document in the "farms" collection with the specified user ID and farm details
        const deviceRef = await db.collection('Iotdevices').add({
          ...device,
          userId: "1d1d12345" //context.uid
        });
        // Return the newly created farm with its ID
        return {
          message: "Iotdevice details successfully added", success: true,
          id: deviceRef.id, deviceRef
        };
      } catch(error: any) {
        return {
          message: `${error} failed to add iotdevices details`, success: false,
        };
      }

      static async getIotdeviceByUserId(userId: string): Promise<any> {

        const farmsRef = db.collection('Farms');
        const query = farmsRef.where('userId', '==', userId);
      
        const snapshot = await query.get();
        const farms: any[] = [];
      
        snapshot.forEach(doc => {
          farms.push({ id: doc.id, ...doc.data() });
        });
        console.log(farms);
      
        return farms;
    }
}