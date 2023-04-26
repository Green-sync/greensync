// import { db } from "../utils";

import { CropsQueryResolver } from "../modules";
import { WeatherQueryResolver } from "../modules/farmer/weather";

export const QueryResolvers = {
    ...CropsQueryResolver,
    ...WeatherQueryResolver,
    
}