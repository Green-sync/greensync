import { WeatherIcon } from "./WearherDto/WeatherIcon"
import { weekData, timeWeather } from "./WearherDto/weatherStaticData"
import "./Weather.scss"

const weekDay = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
]

export const WeatherComponent = () => {
    return <>
         <div className="container p-6 bg-green-900 text-white">
            <div className="flex flex-wrap md:grid-cols-2 gap-4">
                {/* <!-- First column --> */}
                <div className="flex-grow md:w-auto">
                <svg width="60px" height="60px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="flex justify-between">
                    <div>
                    <p className="text-white text-2xl font-extrabold">Soshanguve</p>
                    <p className="text-gray-100 font-thin text-sm">Chance of rain 0 %</p>
                    <p className="text-gray-100 font-medium p-4">{31}&#176;</p>
                    </div>
                    <div className="h-40 w-40">
                        <img src="https://camo.githubusercontent.com/f45ac6a3081bef820e779dbaa0765cae602ba0bf7030749059b1a2234f6dd1f4/68747470733a2f2f626d63646e2e6e6c2f6173736574732f776561746865722d69636f6e732f76322e302f6c696e652f636c6561722d6461792e737667" />

                    </div>
                </div>

                <div className=" border-gray-400 mb-2 bg-gray-400 rounded-sm pb-4">
                    <p className="m-2 font-extrabold text-lg">Today's forecast</p>
                    <div className="flex flex-wrap">
                    {
                        
                        timeWeather.map((value) => {
                            return <>
                            <div className="flex justify-between m-4">
                                <div>
                                 <span className="flex justify-start">{value.time}</span> 
                                 <span className="flex justify-start"> {WeatherIcon(value.weatherType)}</span>
                                 <span className="">{value.degrees}&#176;C</span>
                                </div>
                                <div className="border-l"></div>
                            </div>
                            </>
                        })
                    } 
                    </div>  
                </div>
                <div className=" border-gray-400 mb-2 bg-gray-400 rounded-sm pb-4">
                    <div className="flex justify-between">
                    <p className="m-2 font-extrabold text-lg">Air conditions</p>
                    <button className="bg-green-800 rounded m-2 p-1">See more...</button>
                    </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
                    <p className="font-medium">Real Feel</p>
                    <p className="font-medium">Wind</p>
                    <p className="font-medium">Chance of rain</p>
                    <p className="font-medium">UV Index</p>
                </div>
                </div>
                </div>
                {/* ===========================================SECOND COLUMN============================================================= */}
                <div className="w-full md:w-auto">
                <div className=" border-gray-400 mb-2 bg-gray-400 rounded-md pb-4 md:w-96 ">
                    <p className="m-2 font-semibold">7 days  forecast</p>
                        {weekData.map((value,index) => {
                        return <>
                            <div className="flex justify-between items-center ml-4 mr-4">
                            <p>{weekDay[index]}</p>
                        <div 
                        onClick={() => ""} className="m-4 flex items-center">
                            {value.icon}
                            <span className="m-0">{value.wetherType}</span>
                            </div>
                            <p>{value.degrees}&#176;C</p>
                        </div>
                        <div className="border-t border-gray-300 ml-4  mr-4"></div>
                        </>
                    })}

                </div>

            </div>
                
            </div>
            
             </div>
    </>
}