import { db } from "../../../../utils";
export const WeatherQueryResolver = {
    getAllWeatherData: async () => {
        const weatherDataSnapshot = await db.collection("weatherData").get();
        return weatherDataSnapshot.docs.map(doc => ({
          ...doc.data(),
          weatherDataId: doc.id,
        }));
      },
      getWeatherData: async (_:any, args: { weatherDataId: string }) => {
        const weatherDataSnapshot = await db.collection("weatherData").doc(args.weatherDataId).get();
        return {
          ...weatherDataSnapshot.data(),
          weatherDataId: weatherDataSnapshot.id,
        };
      },
      getWeatherDataByFarmId: async (_:any, args: { farmId: string }) => {
        const querySnapshot = await db.collection("weatherData").where("farmId", "==", args.farmId).get();
        return querySnapshot.docs.map(doc => ({
          ...doc.data(),
          weatherDataId: doc.id,
        }));
      },
}