import { WeatherService } from "../weatherServices";

export const WeatherQueryResolver = {
    getWeather: async (_parent: unknown, __: any, context: { user: any }) => {
    
        return WeatherService.getWeather(context.user);
     },
}