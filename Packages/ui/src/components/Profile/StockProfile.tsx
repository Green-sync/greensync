import { MapPinIcon } from "@heroicons/react/20/solid"
import { IStock } from "./ProfileDto"


export const StockProfile = (farmData: IStock) => {

    return(
        <>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2">
            <div className="m-2">
                <img src="https://media.istockphoto.com/id/1091940998/photo/sunrise-strawberry-farm-landscape-agricultural-agriculture.jpg?s=612x612&w=0&k=20&c=PY6nR5kk5T4RwHd-aYBRCXA3Se3qYtflSKnJqjFu-PM=" alt="farm image" />
            </div>
            <div>
            <span className="text-2xl font-bold">{farmData.itemName}</span>
            <div className="flex">
                <MapPinIcon className="w-5 h-5 flex" />
                <span className="flex">{farmData.price}</span>      
            </div>
            {/* {farmData.farmType} {farmData.name} {farmData.size} */}
            </div>
        </div>
        </>
    )
}