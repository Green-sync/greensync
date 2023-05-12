import { IWeatherData, Iintervals } from "./WeatherDto";
import { WeatherIcon } from "./WeatherIcon";

 export const weekData: IWeatherData[] = [{
    location: "Pretoria",
    weekWeather: [
         {
     day: "Monday",
     icon: WeatherIcon("cloudy"),
     wetherType: "cloudy",
     degrees: 40,
     time: [{
        time: "06:00",
        weatherType: "sunny",
        degrees: 0
    },
    {
        time: "08:00",
        weatherType: "cloudy",
        degrees: 0
    },
    {
        time: "10:00",
        weatherType: "cloudy",
        degrees: 0
    },{
        time: "12:00",
        weatherType: "storm",
        degrees: 0
    },{
        time: "14:00",
        weatherType: "storm",
        degrees: 0
    },{
        time: "16:00",
        weatherType: "rainy",
        degrees: 0
    },{
        time: "18:00",
        weatherType: "rainy",
        degrees: 0
    }]
    },
    {
        day: "Tuesday",
        wetherType: "Sunny",
        degrees: 42,
        icon: WeatherIcon("sunny"),
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },
    {
        day: "Wednesday",
        wetherType: "Cloudy",
        icon: WeatherIcon("cloudy"),
        degrees: 26,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]

    },
    {
        day: "Thursday",
        wetherType: "Cloudy",
        icon: WeatherIcon("cloudy"),
        degrees: 24,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },
    {
        day: "Friday",
        wetherType: "Rainy",
        icon: WeatherIcon("rainy"),
        degrees: 19,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]

    },
    {
        day: "Saturday",
        wetherType: "Rainy",
        icon: WeatherIcon("rainy"),
        degrees: 19,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]

    },{
        day: "Sunday",
        wetherType: "Storm",
        icon: WeatherIcon("storm"),
        degrees: 18,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]

    }]
},
{
    location: "Johannesburg",
    weekWeather: [
         {
     day: "Monday",
     icon: WeatherIcon("storm"),
     wetherType: "storm",
     degrees: 36,     time: [{
        time: "06:00",
        weatherType: "sunny",
        degrees: 0
    },
    {
        time: "08:00",
        weatherType: "cloudy",
        degrees: 0
    },
    {
        time: "10:00",
        weatherType: "cloudy",
        degrees: 0
    },{
        time: "12:00",
        weatherType: "storm",
        degrees: 0
    },{
        time: "14:00",
        weatherType: "storm",
        degrees: 0
    },{
        time: "16:00",
        weatherType: "rainy",
        degrees: 0
    },{
        time: "18:00",
        weatherType: "rainy",
        degrees: 0
    }]
    },
    {
        day: "Tuesday",
        wetherType: "Sunny",
        degrees: 42,
        icon: WeatherIcon("sunny"),
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },
    {
        day: "Wednesday",
        wetherType: "Cloudy",
        icon: WeatherIcon("cloudy"),
        degrees: 26,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },
    {
        day: "Thursday",
        wetherType: "Cloudy",
        icon: WeatherIcon("cloudy"),
        degrees: 24,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },
    {
        day: "Friday",
        wetherType: "Rainy",
        icon: WeatherIcon("rainy"),
        degrees: 19,     time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },
    {
        day: "Saturday",
        wetherType: "Rainy",
        icon: WeatherIcon("rainy"),
        degrees: 19,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },{
        day: "Sunday",
        wetherType: "Storm",
        icon: WeatherIcon("storm"),
        degrees: 18,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    }]
},
{
    location: "Cape Town",
    weekWeather: [
         {
     day: "Monday",
     icon: WeatherIcon("storm"),
     wetherType: "storm",
     degrees: 40,
     time: [{
        time: "06:00",
        weatherType: "storm",
        degrees: 0
    },
    {
        time: "08:00",
        weatherType: "cloudy",
        degrees: 0
    },
    {
        time: "10:00",
        weatherType: "cloudy",
        degrees: 0
    },{
        time: "12:00",
        weatherType: "storm",
        degrees: 0
    },{
        time: "14:00",
        weatherType: "storm",
        degrees: 0
    },{
        time: "16:00",
        weatherType: "rainy",
        degrees: 0
    },{
        time: "18:00",
        weatherType: "rainy",
        degrees: 0
    }]
    },
    {
        day: "Tuesday",
        wetherType: "Sunny",
        degrees: 42,
        icon: WeatherIcon("sunny"),
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },
    {
        day: "Wednesday",
        wetherType: "Cloudy",
        icon: WeatherIcon("cloudy"),
        degrees: 26,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },
    {
        day: "Thursday",
        wetherType: "Cloudy",
        icon: WeatherIcon("cloudy"),
        degrees: 24,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },
    {
        day: "Friday",
        wetherType: "Rainy",
        icon: WeatherIcon("rainy"),
        degrees: 19,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },
    {
        day: "Saturday",
        wetherType: "Rainy",
        icon: WeatherIcon("rainy"),
        degrees: 19,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    },{
        day: "Sunday",
        wetherType: "Storm",
        icon: WeatherIcon("storm"),
        degrees: 18,
        time: [{
            time: "06:00",
            weatherType: "sunny",
            degrees: 0
        },
        {
            time: "08:00",
            weatherType: "cloudy",
            degrees: 0
        },
        {
            time: "10:00",
            weatherType: "cloudy",
            degrees: 0
        },{
            time: "12:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "14:00",
            weatherType: "storm",
            degrees: 0
        },{
            time: "16:00",
            weatherType: "rainy",
            degrees: 0
        },{
            time: "18:00",
            weatherType: "rainy",
            degrees: 0
        }]
    }]
}]

export const timeWeather: Iintervals[] = [{
    time: "06:00",
    weatherType: "sunny",
    degrees: 0
},
{
    time: "08:00",
    weatherType: "cloudy",
    degrees: 0
},
{
    time: "10:00",
    weatherType: "cloudy",
    degrees: 0
},{
    time: "12:00",
    weatherType: "storm",
    degrees: 0
},{
    time: "14:00",
    weatherType: "storm",
    degrees: 0
},{
    time: "16:00",
    weatherType: "rainy",
    degrees: 0
},{
    time: "18:00",
    weatherType: "rainy",
    degrees: 0
}]


// export const weatherType: IWeatherType[] = [{
//     wetherType: "cloudy",
//     image: "https://camo.githubusercontent.com/1aab89eda0e0e99d9aa2e7318d8161c370bfb6d75c2945a60f3b0cd1eb8a8c3c/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76332e302f66696c6c2f7376672f706172746c792d636c6f7564792d6461792e737667",
//     degrees: 0
// },
// {
//     wetherType: "sunny",
//     image: "https://camo.githubusercontent.com/f45ac6a3081bef820e779dbaa0765cae602ba0bf7030749059b1a2234f6dd1f4/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76322e302f6c696e652f636c6561722d6461792e737667",
//     degrees: 37
// },
// {
//     wetherType: "Rainy",
//     image: "https://camo.githubusercontent.com/7872826dc3cb9d1aa1a225a2c563d04b5e7a2e1b893e8e36cabfa7c31a298899/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76322e302f6c696e652f7261696e2e737667",
//     degrees: 0
// },
// {
//     wetherType: "storm",
//     image: "https://camo.githubusercontent.com/b4a267d78315b1588f80bb071cbb7e187160e36b7d2c9bf79de3ecfa912a121a/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76332e302f66696c6c2f7376672f7261696e2e737667",
//     degrees: 0
// },
// {
//     wetherType: "windy",
//     image: "https://camo.githubusercontent.com/eb21956352de79d5e287c8e7d75264bf237b3cbc52b7dcf476f6380e73e064cb/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76322e302f6c696e652f746f726e61646f2e737667",
//     degrees: 0
// }]