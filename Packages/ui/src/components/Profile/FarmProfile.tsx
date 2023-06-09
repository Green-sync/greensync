import { MapPinIcon } from "@heroicons/react/20/solid"
import { IFarms } from "./ProfileDto"
import { useState } from "react";

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

  const livestock = [
    {
      title: 'Cattle',
      description: 'Cattle are domesticated mammals that are raised for meat, dairy products, and leather.',
      status: 'Growth Stage: Adult',
      image: 'https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Pigs',
      description: 'Pigs are intelligent, social animals that are raised for meat and other products.',
      status: 'Growth Stage: Piglet',
      image: 'https://images.pexels.com/photos/14534682/pexels-photo-14534682.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Sheep',
      description: 'Sheep are domesticated mammals that are raised for wool, meat, and milk.',
      status: 'Growth Stage: Lamb',
      image: 'https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Chickens',
      description: 'Chickens are domesticated birds that are raised for their meat and eggs.',
      status: 'Growth Stage: Chick',
      image: 'https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Goats',
      description: 'Goats are domesticated mammals that are raised for their milk, meat, and wool.',
      status: 'Growth Stage: Kid',
      image: 'https://images.pexels.com/photos/3193155/pexels-photo-3193155.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];
export const FarmProfile = (farmData: IFarms) => {
  const [view, setView] = useState("farmType")

    return(
        <>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 ">
            <div className=" lg:border-r-4 md:mr-6 ">
                <div className="flex items-center ">
                <img className="flex mr-2 rounded-full border h-40 w-40" src={ farmData.image ? "https://media.istockphoto.com/id/1091940998/photo/sunrise-strawberry-farm-landscape-agricultural-agriculture.jpg?s=612x612&w=0&k=20&c=PY6nR5kk5T4RwHd-aYBRCXA3Se3qYtflSKnJqjFu-PM=" : `${farmData.image}` } alt="" />
                <div className="ml-0">
                <span className="text-3xl font-bold">{farmData.name}</span>
                        <div className="flex ">
                        <div className="ml-0">
                            <MapPinIcon className="w-12 h-12 flex" />
                        </div>
                        <div>
                        <div className="flex">Size: {farmData.size}h</div>  
                          <span className="flex">{farmData.location} | {farmData.farmType}</span> 
                        </div>
                      </div>
                      <p className="ml-2 bg-gray-300 rounded-md m-1">regitered Date: {"01/03/2009"}</p>
                      <p className="ml-2 bg-gray-300 rounded-md m-1">Soil level: sandy clay loam </p>
                </div>
                </div>
                  <p className="m-4">
                  Welcome to Green Acres Farm, a picturesque countryside haven nestled in the heart of rolling hills and verdant pastures. Our family-owned farm is 
                  dedicated to sustainable agriculture and fostering a deep connection between people, animals, and the land.</p>
                
            </div>
            {/* ========================================================================================================================= */}
             {
              // <div className="w-full lg:w-2/3 xl:w-3/4">
              <div className="flex flex-col">
              {/* <!-- Sidebar --> */}
              <div className="block text-green-900 py-4 px-6">
                      <div onClick={() => ""} className="inline-block px-2 py-1 rounded-md hover:bg-green-700">{farmData.farmType === "Crops" ? "Crops" : "Livestock"}</div>
                      <div onClick={() => ""} className="inline-block px-2 py-1 rounded-md">Land Management</div>
                      <div onClick={() => ""} className="inline-block px-2 py-1 rounded-md">Reports</div>
              </div>
              <div className=" flex-col flex-2">
                { view === "farmType" &&
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {farmData.farmType === "Crops" ? crops.length > 0 ? (
                    crops.map((crop, index) => (
                      <div
                        key={index}
                        className="flex items-center mb-2 space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
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
                    ))
                  ) : <div className="text-md font-medium text-center text-orange-600 m-4">your Crops</div> : livestock.length > 0 ? (
                    <>
                      {livestock.map((livestock, index) => (
                        <div
                          key={index}
                          className="flex items-center mb-2 space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                        >
                          <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={livestock.image} alt="" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <a href="#" className="focus:outline-none">
                              <span className="absolute inset-0" aria-hidden="true" />
                              <p className="text-sm font-medium text-gray-900">{livestock.title}</p>
                              <p className="truncate text-sm text-gray-500">{livestock.status}</p>
                            </a>
                          </div>
                        </div>
                      ))}
                    </> ): <div className="text-md font-medium text-center text-orange-600 m-4">Livestock</div>
                  }
                </div>
                }
                {
                  view === "management" && <div></div>
                }
          </div>

          </div>
          // </div>
             }
            </div>
        {/* </div> */}
        
        </>
    )
}