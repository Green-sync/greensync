// import { db } from "../utils";

import { CropsQueryResolver, LivestockQueryResolver } from "../modules";
import { FarmQueryResolver } from "../modules/farmer/farm";
import { WeatherQueryResolver } from "../modules/farmer/weather";

const mainResolver = {
    ping: ()=> "Pong"
}
export const QueryResolvers = {
    ...WeatherQueryResolver,
    ...FarmQueryResolver,
    ...LivestockQueryResolver,
    ...CropsQueryResolver,
    ...mainResolver
}