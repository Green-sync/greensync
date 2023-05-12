import { db } from "../../../../utils/firbase.config";
import { UserDetails } from "../../../auth/contextDto";
import { WeatherService } from "../weatherServices";
import { WeatherInput } from "./weatherDto";

export const WeatherMutationResolver = {
    createWeather: (_:any, arg: {weather: any},context: {user:UserDetails}) => {

        return WeatherService.addWeather(arg.weather, context.user);
     },
     editWeather: (_parent: unknown, args:
        { weatherId: string, updates: WeatherInput }) => {
        return WeatherService.updateWeather(args.weatherId,args.updates);
      },
     deleteWeather:  async (_parent: unknown, args:
        { weatherId: string; }, context: { user: any }) => {
    
        await db.collection('WeatherData').doc(args.weatherId).delete();
        return {
          success: true, message: "Weather data successfully deleted"
        }
      },
    
}