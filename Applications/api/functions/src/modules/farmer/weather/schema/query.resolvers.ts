import { WeatherService } from "../weatherServices";

export const WeatherQueryResolver = {
    getWeatherByUserId: async (_parent: unknown, args:
        { userId: string; }, context: { user: any }) => {
    
        return WeatherService.getWeatherByUserId(args.userId);
     },
}