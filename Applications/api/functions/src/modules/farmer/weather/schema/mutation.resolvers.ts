import { WeatherService } from "../weatherServices";

export const WeatherMutationResolver = {
    createWeather: (_:any, arg: {weather: any}) => {

        return WeatherService.addWeather(arg.weather);
     },
    
}