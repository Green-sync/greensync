import { MapPinIcon } from "@heroicons/react/20/solid"
import { IFarms } from "./ProfileDto"


export const FarmProfile = (farmData: IFarms) => {

    return(
        <>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2">
            <div className="m-2">
            <img className=" mx-auto h-40 w-40 rounded-md border" src={ farmData.image ? `${farmData.image}` : "https://media.istockphoto.com/id/1091940998/photo/sunrise-strawberry-farm-landscape-agricultural-agriculture.jpg?s=612x612&w=0&k=20&c=PY6nR5kk5T4RwHd-aYBRCXA3Se3qYtflSKnJqjFu-PM="} alt="" />
                {/* <img src="https://media.istockphoto.com/id/1091940998/photo/sunrise-strawberry-farm-landscape-agricultural-agriculture.jpg?s=612x612&w=0&k=20&c=PY6nR5kk5T4RwHd-aYBRCXA3Se3qYtflSKnJqjFu-PM=" alt="farm image" /> */}
            </div>
            <div>
            <span className="text-2xl font-bold">{farmData.name}</span>
            <div className="flex">
                <MapPinIcon className="w-5 h-5 flex" />
                <span className="flex">{farmData.location}</span>      
            </div>
            <span className="flex">Size: {farmData.size} hectares</span>  
            <span className="flex">{farmData.farmType}</span>
            <button onClick={() => ""} className="bg-lime-300 rounded-md text-white pl-4 pr-5">Update</button>
            </div>
        </div>
        </>
    )
}