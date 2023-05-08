import { db } from "../../../../utils/firbase.config";
import { WeatherService } from "../weatherServices";

export const WeatherMutationResolver = {
    createWeather: (_:any, arg: {weather: any}) => {

        return WeatherService.addWeather(arg.weather);
     },
     deleteWeather:  async (_parent: unknown, args:
        { weatherId: string; }, context: { user: any }) => {
    
        await db.collection('WeatherData').doc(args.weatherId).delete();
        return {
          success: true, message: "Weather data successfully deleted"
        }
      },
    
}