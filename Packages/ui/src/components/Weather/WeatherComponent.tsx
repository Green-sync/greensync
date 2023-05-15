import { useRef, useState } from "react";
import { WeatherIcon } from "./WearherDto/WeatherIcon";
import { weekData } from "./WearherDto/weatherStaticData";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import "./Weather.scss"; 
import { IWeatherData } from "./WearherDto/WeatherDto";


export const WeatherComponent = () => {
  const [open, setOpen] = useState(false);
  const [searchWeather, setSearchWeather] = useState<IWeatherData[]>([weekData[0]]);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearchWeather(filteredData);
  }

  const filteredData = weekData.filter((item) =>
    item.location.toLowerCase() === searchTerm.toLowerCase()
  );

  return (
    <>
      <div className="container p-6 bg-green-700 text-white">
        <div className="flex flex-wrap md:grid-cols-2 gap-4">
          {/* <!-- First column --> */}
          <div className="flex-grow md:w-auto">
            <div className="grid grid-cols-1 justify-items-center ">
              <form
              onSubmit={handleSubmit}
                onClick={() => setOpen(!open)}
                className="pr-1 flex justify-between border-1 border-gray-600 w-1/3 rounded-lg bg-green-800 bg-opacity-10 items-center"
              >
                <input
                  type="text"
                  placeholder="Search  for location"
                  onChange={handleSearch}
                  className="outline-none p-2 bg-green-800 bg-opacity-10 w-full rounded-lg"
                />
                <span className="flex">
                  <MagnifyingGlassIcon className="w-5 pointer-events-none" />
                </span>
              </form>
             
              {/* {
                        open && <>
                        <div className=" rounded bg-green-900 bg-opacity-10 w-1/3 m-2">
                            <p className="m-2 text-lg text-gray-500">My Locations</p>
                            {searchWeather.map((v) => {
                                return <>
                            <p className="font-medium m-2" onClick={() => ""}>{v.location}</p>
                            </>
                            })}
                        </div>
                        </>
                    } */}
            </div>

            <div className="flex justify-between">
              <div>
                <p className="text-white text-4xl font-extrabold">
                  {searchWeather[0]?.location}
                </p>
                <p className="text-gray-100 font-thin text-sm">
                  Chance of rain 0 %
                </p>
                <div className="flex space-x-0">
                 {searchWeather[0]?.weekWeather[1].icon} 
                <p className="text-gray-100 font-medium text-2xl">{searchWeather[0]?.weekWeather[0].degrees}&#176;</p>
                </div>
              </div>
            </div>

            <div className=" border-gray-400 mb-2 bg-green-800 bg-opacity-10 rounded-md">
              <p className="m-4 pt-4 font-extrabold text-lg">Today's forecast</p>
              <div className="flex flex-wrap">
                {searchWeather.map((value) => {
                  return (
                    <>
                        {value.weekWeather.map((d, i) => { 
                            return <>
                       <div className="flex justify-between m-6">
                        <div>
                          <span className="flex justify-start">
                            {d.time[i].time}
                          </span>
                          <span className="flex justify-start">
                            {" "}
                            {WeatherIcon(
                              d.time[i].weatherType
                            )}
                          </span>
                          <span className="">
                            {d.time[i].degrees}
                            &#176;C
                          </span>
                        </div>
                        <div className="border-l "></div>
                      </div> 
                      </>
                    })}
                    
                    </>
                  );
                })}
              </div>
            </div>
            <div className=" border-gray-400 mb-2 bg-green-800 bg-opacity-10 rounded-md border-1 pb-4">
              <div className="flex justify-between">
                <p className="m-4 font-extrabold text-lg">Air conditions</p>
                <button className="bg-green-800 rounded m-2 p-1">
                  See more
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-8 text-gray-200 ">
                <div className="flex items-center space-x-2 font-medium">
                    {WeatherIcon("realFeel")} Real Feel 
                    <span className="text-2xl text-white">30&#176;</span>
                </div>
                <div className="flex items-center space-x-2 font-medium">
                    {WeatherIcon("wind")}Wind
                    <span className="text-2xl text-white">0.2 Km/h</span>
                    </div>
                <div className="flex items-center space-x-2 font-medium">
                    {WeatherIcon("drop")}Chance of rain
                    <span className="text-2xl text-white">0%</span>
                    </div>
                <div className="flex items-center space-x-2 font-medium">
                    {WeatherIcon("index")}UV Index
                    <span className="text-2xl text-white">3</span>
                    </div>
              </div>
            </div>
          </div>
          {/* ===========================================SECOND COLUMN============================================================= */}
          <div className="w-full md:w-auto">
            <div className="border-gray-400 mb-4 bg-green-800 bg-opacity-10 rounded-md pb-4 md:w-96 ">
              <p className="m-4 pt-4 font-extrabold text-lg">7 days forecast</p>
              {searchWeather.map((value) => {
                return (
                  <>
                    {value.weekWeather.map((d) => {
                      return (
                        <>
                        <div className="flex justify-between items-center ml-4 mr-4">
                            <p>{d.day}</p>
                               <div
                                 onClick={() => ""}
                                className="m-4 flex items-center">
                                    {d.icon}
                                <span className="m-0">{d.wetherType}</span>
                                </div>
                                <p>{d.degrees}&#176;C</p>
                            </div>
                            <div className="border-t border-gray-300 ml-4  mr-4"></div>
                        </>
                      );
                    })}
                  </>
);                        
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
