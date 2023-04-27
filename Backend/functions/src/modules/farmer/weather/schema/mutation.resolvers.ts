import { db } from "../../../../utils";

export const WeatherMutationResolver = {
   //WeatherData Mutation
   createWeatherData: async (_:any, args: { input:any }) => {
    const newWeatherDataRef = await db.collection("weatherData").add(args.input);
    const newWeatherDataSnapshot = await newWeatherDataRef.get();
    return {
      ...newWeatherDataSnapshot.data(),
      weatherDataId: newWeatherDataSnapshot.id,
    };
  },
  updateWeatherData: async (_:any, args: { weatherDataId:string, input: any }) => {
    const weatherDataRef = db.collection("weatherData").doc(args.weatherDataId);
    await weatherDataRef.update(args.input);
    const updatedWeatherDataSnapshot = await weatherDataRef.get();
    return {
      ...updatedWeatherDataSnapshot.data(),
      weatherDataId: updatedWeatherDataSnapshot.id,
    };
  },
}