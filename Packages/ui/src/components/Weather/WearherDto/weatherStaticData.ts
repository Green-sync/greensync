import { IWeatherType, IWeekWeather } from "./WeatherDto";

 export const weekData: IWeekWeather[] = [{
     day: "Monday",
     imgage: "../photos/static/day.svg",
     wetherType: "Sunny",
     degrees: 40
 },
 {
    day: "Tuesday",
    wetherType: "Sunny",
    degrees: 42,
    imgage: "../photos/static/day.svg",

},
{
    day: "Wednesday",
    wetherType: "Cloudy",
    imgage: "../photos/static/cloudy.svg",
    degrees: 26
},
{
    day: "Thursday",
    wetherType: "Cloudy",
    imgage: "../photos/static/cloudy-day-3.svg",
    degrees: 24
},
{
    day: "Friday",
    wetherType: "Rainy",
    imgage: "../photos/static/rainy-7.svg",
    degrees: 19
},
{
    day: "Saturday",
    wetherType: "Rainy",
    imgage: "../photos/static/rainy-1.svg",
    degrees: 19
},{
    day: "Sunday",
    wetherType: "Storm",
    imgage: "../photos/static/thunder.svg",
    degrees: 18
}]

export const weatherType: IWeatherType[] = [{
    wetherType: "cloudy",
    image: "https://camo.githubusercontent.com/1aab89eda0e0e99d9aa2e7318d8161c370bfb6d75c2945a60f3b0cd1eb8a8c3c/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76332e302f66696c6c2f7376672f706172746c792d636c6f7564792d6461792e737667",
    degrees: 0
},
{
    wetherType: "sunny",
    image: "https://camo.githubusercontent.com/f45ac6a3081bef820e779dbaa0765cae602ba0bf7030749059b1a2234f6dd1f4/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76322e302f6c696e652f636c6561722d6461792e737667",
    degrees: 37
},
{
    wetherType: "Rainy",
    image: "https://camo.githubusercontent.com/7872826dc3cb9d1aa1a225a2c563d04b5e7a2e1b893e8e36cabfa7c31a298899/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76322e302f6c696e652f7261696e2e737667",
    degrees: 0
},
{
    wetherType: "storm",
    image: "https://camo.githubusercontent.com/b4a267d78315b1588f80bb071cbb7e187160e36b7d2c9bf79de3ecfa912a121a/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76332e302f66696c6c2f7376672f7261696e2e737667",
    degrees: 0
},
{
    wetherType: "windy",
    image: "https://camo.githubusercontent.com/eb21956352de79d5e287c8e7d75264bf237b3cbc52b7dcf476f6380e73e064cb/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76322e302f6c696e652f746f726e61646f2e737667",
    degrees: 0
}]