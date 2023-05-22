import { UserDetails } from "../../../auth/contextDto";
import { IotdeviceService } from "../iotdeviceServices";

export const IotdeviceQueryResolver = {
    getIotdevice: async (_parent: unknown, __: any, context: { user: UserDetails }) => {
    
        return IotdeviceService.getIotdevice(context.user);
     },
     getDeviceByfarmId: async(_:unknown, args: {farmId: string}, context: {user: UserDetails})=>{

        return IotdeviceService.getDeviceByfarmId(args.farmId, context.user)

     }

    
  
  }