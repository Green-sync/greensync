import { WeatherIcon } from "./WearherDto/WeatherIcon"
import { weekData } from "./WearherDto/weatherStaticData"
import "./Weather.scss"

const weekDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

export const WeatherComponent = () => {
    return <>
         <div className="container p-6 bg-green-900 text-white">
            <div className="flex flex-wrap md:grid-cols-2 gap-4">
                {/* <!-- First column --> */}
                <div className="flex-grow md:w-auto">
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
                <div className=" border-gray-400 mb-2 bg-gray-400 rounded-sm pb-4">
                    <p className="m-2 font-semibold">7 days  forecast</p>
                        {weekData.map((value,index) => {
                        return <>
                        <div className="m-4 marker flex justify-between">
                            <p>{weekDay[index]}</p>
                            <div className="flex justify-between justify-items-center">
                            {value.icon}
                            {value.wetherType}
                            </div>
                            <p>{value.degrees}/21</p>
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