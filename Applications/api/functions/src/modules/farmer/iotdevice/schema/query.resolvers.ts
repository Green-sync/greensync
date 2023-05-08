import { IotdeviceService } from "../iotdeviceServices";

export const IotdeviceQueryResolver = {
    getIotdeviceByUserId: async (_parent: unknown, args:
        { userId: string; }, context: { user: any }) => {
    
        return IotdeviceService.getIotdeviceByUserId(args.userId);
     },
    
  
  }