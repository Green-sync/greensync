import { PlusCircleIcon } from "@heroicons/react/24/outline";
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
  {
    title: 'Sorghum',
    description: 'Sorghum is a cereal grain that is commonly used for animal feed and ethanol production.',
    status: 'Booting',
    image: 'https://media.istockphoto.com/id/1347198038/photo/biofuel-and-food-sorghum-plantation-industry-field-of-sweet-sorghum-stalk-and-seeds-millet.jpg?b=1&s=612x612&w=0&k=20&c=EgRRmx3maR1aKsOlLHVYJSji3ekRlFmSFKICmPmCAv8='
  },
  {
    title: 'Tomatoes',
    description: 'Tomatoes are a fruit that is commonly used in cooking and can be eaten raw or cooked.',
    status: 'Green Fruit',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Peanuts',
    description: 'Barley is a cereal grain that is commonly used in beer and whisky production.',
    status: 'Booting',
    image: 'https://images.pexels.com/photos/209371/pexels-photo-209371.jpeg?auto=compress&cs=tinysrgb&w=600'
  },

];

export const CropsComponent = () => {
  const [selectedCrops, setSelectedCrops] =useState([])
  const handleSelectedCrop = (ev: any) => {
    console.log(ev.target.id)
    // @ts-ignore
    setSelectedCrops([...selectedCrops, crops[+ev.target.id]])
  }
  return (

  <div>
      <pre>

        {JSON.stringify(selectedCrops, null, 2)}
      </pre><div>
        <h1 className="text-2xl flex items-center justify-center p-3 rounded-md text-white bg-lime-900 font-bold mb-4">My Crops</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="relative flex bg-yellow-600 items-center space-x-3 rounded-lg border border-gray-300 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
            <div className="flex-shrink-0">
              <PlusCircleIcon className="h-10 w-10 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-white">Add Crops</p>
              </a>
            </div>
          </div>
          {crops.map((crop, index) => (
            <div
              key={index}
              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={crop.image} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <a onClick={handleSelectedCrop} id={index} href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{crop.title}</p>
                  <p className="truncate text-sm text-gray-500">{crop.status}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};


export default CropsComponent;
