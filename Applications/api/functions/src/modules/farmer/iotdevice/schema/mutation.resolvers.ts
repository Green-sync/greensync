import { db } from "../../../../utils/firbase.config";
import { UserDetails } from "../../../auth/contextDto";
import { IotdeviceService } from "../iotdeviceServices";



export const IotdeviceMutationResolver = {
    createIotdevice: (_: any, arg: { device: any }, context: {user:UserDetails}) => {
        console.log(context)
        return IotdeviceService.addIotdevice(arg.device, context.user);
      },
  
     deleteDevice: async (_parent: unknown, args:
        { deviceId: string; }, context: { user: any }) => {
    
        await db.collection('Iotdevices').doc(args.deviceId).delete();
        return {
          success: true, message: "successfully deleted"
        }
      },
     
}