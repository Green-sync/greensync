import { MapPinIcon } from "@heroicons/react/20/solid"
import { IFarms, IProfileData } from "./ProfileDto"


export const FarmProfile = (farmData: IFarms) => {

    return(
        <>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2">
            <div className="m-2">
                <img src="https://media.istockphoto.com/id/1091940998/photo/sunrise-strawberry-farm-landscape-agricultural-agriculture.jpg?s=612x612&w=0&k=20&c=PY6nR5kk5T4RwHd-aYBRCXA3Se3qYtflSKnJqjFu-PM=" alt="farm image" />
            </div>
            <div>
                <MapPinIcon /> {farmData.location}
                    {farmData.farmType} {farmData.name} {farmData.size}
            </div>
        </div>
        </>
    )
}