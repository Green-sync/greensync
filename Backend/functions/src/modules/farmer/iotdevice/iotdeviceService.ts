import { db } from "../../../utils";

export class iotDeviceService {
    
    static async addIotDevice(device: any) {
        try {
          
            await db.collection("IotDevice").add(device)
          return {
            message: "IotDevice details successfully added", success: true,
          };
        } catch (error) {
          return {
            message: `${error} failed to add IotDevice details`, success: false,
          };
        }
      }

}