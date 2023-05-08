import { weekData } from "./WearherDto/weatherStaticData"
import "./Weather.scss"
export const WeatherComponent = () => {
    return <>
         <div className="container p-6 bg-green-900 text-white">
            <div className="grid grid-cols-2 md:grid-cols-2">
                {/* <!-- First column --> */}
                <div className="flex justify-between">
                    <div>
                    <p className="text-white text-2xl font-extrabold">Soshanguve</p>
                    <p className="text-gray-100 font-thin text-sm">Chance of rain 0 %</p>
                    <p className="text-gray-100 font-medium p-4">31</p>
                    </div>
                    <div className="h-60 w-40">
                        <img src="./photos/sun.png" alt="" />
                    </div>
                </div>
                <div className=" border-gray-400 mb-2 bg-gray-400 rounded-md">
                    <p className="m-2 font-semibold">7 days  forecast</p>
                    {weekData.map((value) => {
                        return <>
                        <div className="m-4 marker flex justify-between">
                            <p>{value.day}</p>
                            <img src={value.imgage} />{value.wetherType}
                            <p>{value.degrees}/21</p>
                        </div>
                        <div className="border-t border-gray-300 ml-4 mr-4"></div>
                        </>
                    })}
                </div>
                {/* ===========================================SECOND COLUMN============================================================= */}
                <div className="">
                <div className=" border-gray-400 mb-5 bg-gray-400 rounded-md pb-4">
                        <p className="m-2 font-semibold">Today's forecast</p>

                </div>
                <div className=" border-gray-400 mb-5 bg-gray-400 rounded-md pb-4">
                        <p className="m-2 font-semibold">air conditions</p>

                </div>
            </div>
                
            </div>
             </div>
    </>
}