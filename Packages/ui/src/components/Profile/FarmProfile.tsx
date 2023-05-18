import { MapPinIcon } from "@heroicons/react/20/solid"
import { IFarms, IProfileData,FarmDto, land } from "./ProfileDto"
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
  export const Farm: FarmDto[] =  [
    {
     name: "Green Acres Farm",
     type: "LIVESTOCKS",
     location: "Centurion, PTA",
     description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum felis quis libero
     consectetur, at euismod neque tincidunt. Ut id metus quis neque viverra eleifend. Suspendisse
     hendrerit auctor dolor ut venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum felis quis libero
     consectetur, at euismod neque tincidunt. Ut id metus quis neque viverra eleifend. Suspendisse
     hendrerit auctor dolor ut venenatis.`,
     size: "100 hectors",
     image: "https://images.pexels.com/photos/872483/pexels-photo-872483.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
] 
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

const landManagement: land[] =[
  {
    name: "Soil Testing",
    status: "Healthy",
    link: "",
    manager: "John Doe"
  },
  {
    name: "Harvesting and Storages",
    status: "Initial Stage",
    link: "",
    manager: "Paul"
  },
  {
    name: "Irrigation Management",
    status: "in Progress",
    link: "",
    manager: "Lebo"
  },
  {
    name: "Pest Control",
    status: "Clear",
    link: "",
    manager: "Moses"
  }
]
export const FarmProfile = () => {
  const [view, setView] = useState("farmType")

    const handleView = (e: any) => {
      const id = e.target.id
      setView(id)
    }
    // const farmKeys = Object.values(Farm);
    console.log(Farm)
    return (
        <>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8  w-full">
        {Farm.map((v,i) => {
          return <>
          <div key={i}> 
          <div className="flex m-4">      
              <img
          src={v.image}
          alt="Farm"
          className="rounded-lg mb-6 h-48 w-40"
        />
        <div className="m-4">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">{v.name}</h1>
            <div className="flex ">
                            <div className="ml-0">
                                <MapPinIcon className="w-8 h-8 flex" />
                            </div>
            <p className="text-gray-600 mb-4">{v.location}</p>
            </div>
            <div className="flex"><p className="ml-2 text-sm  bg-gray-300 rounded-md m-1 p-1">Regitered Date:</p><p className="ml-2 bg-gray-300 rounded-md m-1 p-1"> {"01/03/2009"}</p></div>
            <div className="flex"><p className="ml-2 text-sm bg-gray-300 rounded-md m-1 p-1">Soil level</p><p className="ml-2 bg-gray-300 rounded-md m-1 p-1">  sandy clay loam </p></div>
        </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-600">
           {v.description}
          </p>
        </div>
        <div>       
            <h1 className="text-xl  flex  p-3 rounded-md text-white bg-lime-900 font-medium mb-4">
                     {v.type} Status
                   </h1></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {(v.type === "CROPS" || v.type === "MIX") ? crops.length > 0 ? (
                    crops.map((crop, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                      >
                        <div className="flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src={crop.image} alt="" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">{crop.title}</p>
                            <p className="truncate text-sm text-gray-500">{crop.status}</p>
                          </div>
                        </div>
                      </div>
                    ))
         ) : <div className="text-md font-medium text-center text-orange-600 m-4">your Crops</div> : ""  }
         {
          (v.type === "LIVESTOCKS" || v.type === "MIX")? livestock.length > 0 ? (
            livestock.map((livestock, index) => {
              return <>
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
           </> })
          ) : <div className="text-md font-medium text-center text-orange-600 m-4">your Crops</div> : "" 
         }
        </div>
          <h2 className="text-lg font-semibold mb-4">Land Management</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum felis quis libero
            consectetur, at euismod neque tincidunt. Ut id metus quis neque viverra eleifend. Suspendisse
            hendrerit auctor dolor ut venenatis.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 m-4">
          {landManagement.map((farm,i) => (
              <div key={i} className="bg-white cursor-pointer overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">

                  <h1 className="text-lg leading-6 font-medium text-gray-900">{farm.name}</h1>
                  <p className="mt-1 max-w-2xl text-md text-gray-800">{farm.manager}</p>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">{farm.status}</p>

                </div>

              </div>
            ))}
            </div>
</div>
        </>
        })}
      </div>
        </div>
        </>
    )
}