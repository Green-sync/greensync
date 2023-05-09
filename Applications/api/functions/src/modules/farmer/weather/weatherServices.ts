import { db } from "../../../utils";
import { WeatherInput } from "./schema/weatherDto";

export class WeatherService {

  static async addWeather(weather: any) {

    // Create a new document in the "farms" collection with the specified user ID and farm details
    const farmRef = await db.collection('WeatherData').add({
      ...weather,
      userId: "1d1d12345" //context.uid
    });
    // Return the newly created farm with its ID
    return {
      message: "Weather details successfully added", success: true,
      id: farmRef.id, farmRef
    };
  } catch(error: any) {
    return {
      message: `${error} failed to add weather details`, success: false,
    };
  }


  static async updateWeather(weatherId: string, updates: WeatherInput) {
    try {

      // Update the farm document with the specified ID
      await db.collection('WeatherData').doc(weatherId).update({...updates});
      // Return a success message
      return {
        message: "Weather details successfully updated", success: true,
      };
    } catch (error) {
      // Return an error message
      return {
        message: `${error} failed to update weather details`, success: false,
      };
    }
  }

  static async getWeatherByUserId(userId: string): Promise<any> {

    const weatherRef = db.collection('WeatherData');
    const query = weatherRef.where('userId', '==', userId);
  
    const snapshot = await query.get();
    const weather: any[] = [];
  
    snapshot.forEach(doc => {
        weather.push({ id: doc.id, ...doc.data() });
    });
    return weather;
  }

}