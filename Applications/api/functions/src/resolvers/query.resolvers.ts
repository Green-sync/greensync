// import { db } from "../utils";

import { CropsQueryResolver, LivestockQueryResolver } from "../modules";
import { FarmQueryResolver } from "../modules/farmer/farm";
import { IotdeviceQueryResolver } from "../modules/farmer/iotdevice";
import { UserQueryResolver } from "../modules/farmer/profile";
import { WeatherQueryResolver } from "../modules/farmer/weather";

const mainResolver = {
    ping: ()=> "Pong"
}
export const QueryResolvers = {
    ...WeatherQueryResolver,
    ...FarmQueryResolver,
    ...LivestockQueryResolver,
    ...IotdeviceQueryResolver,
    ...UserQueryResolver,
    ...CropsQueryResolver,
    ...mainResolver
}