

import { CropsQueryResolver, LivestockQueryResolver, UserQueryResolver } from "../modules";
import { FarmQueryResolver } from "../modules/farmer/farm";
import { IotDeviceQueryResolver } from "../modules/farmer/iotdevice";
import { WeatherQueryResolver } from "../modules/farmer/weather";

export const QueryResolvers = {
    ...CropsQueryResolver,
    ...WeatherQueryResolver,
    ...UserQueryResolver,
    ...FarmQueryResolver,
    ...LivestockQueryResolver,
    ...IotDeviceQueryResolver
    
    
    
}