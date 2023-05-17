import { MapPinIcon } from "@heroicons/react/20/solid"
import { IFarms } from "./ProfileDto"

const crops = [
    {
      title: 'Wheat',
      description: 'Wheat is a cereal grain that is commonly cultivated for its seed.',
      status: 'Heading',
      image: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: 'Corn',
      description: 'Corn is a popular crop that is used for both food and fuel.',
      status: 'Tasseling',
      image: "https://images.pexels.com/photos/547264/pexels-photo-547264.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: 'Soybeans',
      description: 'Soybeans are a legume that is commonly used for animal feed and processed food products.',
      status: 'Podding',
      image: "https://images.pexels.com/photos/3735174/pexels-photo-3735174.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: 'Potatoes',
      description: 'Potatoes are a root vegetable that is commonly used in many dishes around the world.',
      status: 'Tuber Initiation',
      image: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Cotton',
      description: 'Cotton is a soft, fluffy staple fiber that is used to make textiles and clothing.',
      status: 'Square',
      image: 'https://images.pexels.com/photos/6280177/pexels-photo-6280177.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

export const FarmProfile = (farmData: IFarms) => {

    return(
        <>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2">
            <div>
                <div className="p-4 grid w-80 md:w-auto md:grid-cols-2">
                <img className=" mx-auto rounded-full border h-40 w-40" src={ farmData.image ? "https://media.istockphoto.com/id/1091940998/photo/sunrise-strawberry-farm-landscape-agricultural-agriculture.jpg?s=612x612&w=0&k=20&c=PY6nR5kk5T4RwHd-aYBRCXA3Se3qYtflSKnJqjFu-PM=" : `${farmData.image}` } alt="" />
                <div>
                <span className="text-3xl font-bold">{farmData.name}</span>
                       <div className="flex">
                           <MapPinIcon className="w-10 h-10 flex" />
                           <span className="flex">{farmData.location} | {farmData.farmType}</span> 
                          {/* <p className="flex">Size: {farmData.size} hectares</p>   */}

                        </div>
                </div>
                </div>
            </div>
            {/* ========================================================================================================================= */}
            <div className=" m-4 flex-grow md:w-auto grid md:grid-cols-2">
            {farmData.farmType === "Crops"  ? crops.map((crop, index) => (
                 <div
                   key={index}
                   className=" flex items-center mb-2 space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                 >
                   <div className="flex-shrink-0">
                     <img className="h-10 w-10 rounded-full" src={crop.image} alt="" />
                   </div>
                   <div className="min-w-0 flex-1">
                     <a href="#" className="focus:outline-none">
                       <span className="absolute inset-0" aria-hidden="true" />
                       <p className="text-sm font-medium text-gray-900">{crop.title}</p>
                       <p className="truncate text-sm text-gray-500">{crop.status}</p>
                     </a>
                   </div>
                 </div>
               )) : ""
             }
            </div>
        </div>
        
        </>
    )
}