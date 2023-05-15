import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import LivestockComponent from "../LivestockComponent";
import CropsComponent from "../CropsComponent";
import { BackwardIcon } from "@heroicons/react/24/solid";

type Farm = {
  id: number;
  name: string;
  type: string;
  location: string;
  image?: string;
  size: string
};

const farms: Farm[] = [
  {
    id: 1,
    name: "Green Acres Farm",
    type: "Crops",
    location: "Centurion, PTA",
    size: "100 hectors",
    image: "https://images.pexels.com/photos/872483/pexels-photo-872483.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Happy Hens Farm",
    type: "Livestock",
    location: "Krugersdorp, JHB",
    size: "50 hectors",
    image: "https://images.pexels.com/photos/39351/purple-grapes-vineyard-napa-valley-napa-vineyard-39351.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Golden Fields Farm",
    type: "Livestock and Crops",
    location: "Dalmada, PLK",
    size: "200 hectors"
  },
];

const randomColor = () => {
  const colors = ['bg-lime-900', 'bg-yellow-600'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export const FarmTypeComponent = () => {
  const [selectedFarmType, setSelectedFarmType] = useState("");

  const handleFarmClick = (farmType: string) => {
    setSelectedFarmType(farmType);
  };

  const handleBack = () => {
    setSelectedFarmType("");
  }

  const [isHovering] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      {selectedFarmType ? (

        <div>
          <div className="border-b-4 border-t-4 border-lime-900">
          {selectedFarmType && (
  <div className="flex items-center p-2">
    {farms.find((farm) => farm.type === selectedFarmType)?.image ? (
      <div className="w-26 h-16 rounded-lg overflow-hidden mr-4">
        <img
          src={farms.find((farm) => farm.type === selectedFarmType)?.image}
          alt={selectedFarmType}
          className="w-26 h-16 object-cover"
        />
      </div>
    ) : (
      <div className={`w-26 h-16 rounded-lg mr-4 ${randomColor()}`}>
        <p className="text-white font-bold text-xs p-2 flex items-center justify-center">
          No Image
        </p>
      </div>
    )}
    <h3 className="text-lg font-medium text-gray-900">
      {farms.find((farm) => farm.type === selectedFarmType)?.name}
    </h3>
  </div>
)}

          </div>


          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center hover:text-red-700 text-yellow-600 font-semibold group"
            >
              <BackwardIcon
                className={`h-5 w-5 transition-transform transform ${isHovering ? '-translate-x-1 animate-ping' : 'translate-x-0'
                  } group-hover:-translate-x-2`}
              />
              <span className="transition-transform transform ml-1 group-hover:-translate-x-1">
                Go Back
              </span>
            </button>

          </div>

          <div>
            {selectedFarmType === "Livestock" && <LivestockComponent />}
            {selectedFarmType === "Crops" && <CropsComponent />}
            {selectedFarmType === "Livestock and Crops" && (
              <div>
                <LivestockComponent />
                <CropsComponent />
              </div>
            )}
          </div>
        </div>


      ) :
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Farms</h3>
              <p className="mt-1 text-sm text-gray-500">
                Manage your farms and their offerings.
              </p>
            </div>
            <div className="ml-4 p-10 mt-4 flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center rounded-md  bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add new farm
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {farms.map((farm) => (
              <div key={farm.id} className="bg-white cursor-pointer overflow-hidden shadow rounded-lg">

                <div onClick={() => handleFarmClick(farm.type)} className="px-4 py-5 sm:p-6">
                  <div className="relative h-40">
                    {farm.image ? (
                      <img src={farm.image} alt={farm.name} className="absolute rounded-md inset-0 w-full h-full object-cover" />
                    ) : (
                      <div className={`absolute inset-0 rounded-md w-full h-full ${randomColor()} text-center flex flex-col justify-center`}>
                        <p className="text-white font-bold text-sm">Image Not Available</p>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg leading-6 font-medium text-gray-900">{farm.name}</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">{farm.type}</p>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">{farm.location}</p>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Size: {farm.size}</p>

                </div>
                <div className="flex justify-end h-10 px-4  sm:p-6">
                  <div className="flex items-center">
                    <button type="button" onClick={() => console.log('edit button clicked')} className="mr-2">
                      <PencilSquareIcon className="h-5 w-5 text-yellow-600" />
                    </button>
                    <button onClick={() => console.log('Delete button clicked')} type="button">
                      <TrashIcon className="h-5 w-5 text-red-600" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>


        </div>
      }
    </div>
  );
};

export default FarmTypeComponent;
