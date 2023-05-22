import { db } from "../../../utils/firbase.config";
import { UserDetails } from "../../auth/contextDto";
import { CommonService } from "../services/CommonServices";

export class IotdeviceService {
    static async addIotdevice(device: any, user: UserDetails) {
        // Create a new document in the "farms" collection with the specified user ID and farm details
        const deviceRef = await db.collection('Iotdevice').add({
          ...device,
          userId: user.uid
        });
        await CommonService.generalCollectionMapper(deviceRef.id, device.farmId, 'Farm', "IotdeviceIds")
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

      static async getIotdevice(user: UserDetails): Promise<any> {

        const farmsRef = db.collection('Iotdevice');
        const query = farmsRef.where('userId', '==', user.uid);
      
        const snapshot = await query.get();
        const farms: any[] = [];
      
        snapshot.forEach(doc => {
          farms.push({ id: doc.id, ...doc.data() });
        });
        console.log(farms);
      
        return farms;
    }

    static async getDeviceByfarmId(farmId: string,user: UserDetails): Promise<any> {

      const deviceRef = db.collection('Iotdevice');
      const query = deviceRef.where('farmId', '==', farmId);
  
      const snapshot = await query.get();
      const devices: any[] = [];
  
      snapshot.forEach(doc => {
        devices.push({ id: doc.id, ...doc.data() });
      });
      console.log(devices);
  
      return devices;
    }
}