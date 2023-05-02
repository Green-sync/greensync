import { db } from "../../../utils";

export class WeatherService {
    static async addWeather(weather: any) {
        try {          
          await db.collection("WeatherData").add(weather)
          return {
            message: "Weather details successfully added", success: true,
          };
        } catch (error) {
          return {
            message: `${error} failed to add Weather details`, success: false,
          };
        }
      }

}