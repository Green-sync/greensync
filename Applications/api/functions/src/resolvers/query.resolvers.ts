// import { db } from "../utils";

import { CropsQueryResolver } from "../modules";
import { WeatherQueryResolver } from "../modules/farmer/weather";

const mainResolver = {
    ping: ()=> "Pong"
}
export const QueryResolvers = {
    ...WeatherQueryResolver,
    ...CropsQueryResolver,
    ...mainResolver
}