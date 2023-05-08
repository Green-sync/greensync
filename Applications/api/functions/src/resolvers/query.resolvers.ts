// import { db } from "../utils";

import { CropsQueryResolver } from "../modules";
import { FarmQueryResolver } from "../modules/farmer/farm";
import { WeatherQueryResolver } from "../modules/farmer/weather";

const mainResolver = {
    ping: ()=> "Pong"
}
export const QueryResolvers = {
    ...WeatherQueryResolver,
    ...FarmQueryResolver,
    ...CropsQueryResolver,
    ...mainResolver
}