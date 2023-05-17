import { PlusCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface ICrops{
  id:number,
  title:string,
  description:string,
  status:string,
  image:string
}

const crops:ICrops[] = [
  {id:1,
    title: 'Wheat',
    description: 'Wheat is a cereal grain that is commonly cultivated for its seed.',
    status: 'Heading',
    image: "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {id:2,
    title: 'Corn',
    description: 'Corn is a popular crop that is used for both food and fuel.',
    status: 'Tasseling',
    image: "https://images.pexels.com/photos/547264/pexels-photo-547264.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {id:3,
    title: 'Soybeans',
    description: 'Soybeans are a legume that is commonly used for animal feed and processed food products.',
    status: 'Podding',
    image: "https://images.pexels.com/photos/3735174/pexels-photo-3735174.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {id:4,
    title: 'Potatoes',
    description: 'Potatoes are a root vegetable that is commonly used in many dishes around the world.',
    status: 'Tuber Initiation',
    image: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {id:5,
    title: 'Cotton',
    description: 'Cotton is a soft, fluffy staple fiber that is used to make textiles and clothing.',
    status: 'Square',
    image: 'https://images.pexels.com/photos/6280177/pexels-photo-6280177.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {id:6,
    title: 'Sorghum',
    description: 'Sorghum is a cereal grain that is commonly used for animal feed and ethanol production.',
    status: 'Booting',
    image: 'https://media.istockphoto.com/id/1347198038/photo/biofuel-and-food-sorghum-plantation-industry-field-of-sweet-sorghum-stalk-and-seeds-millet.jpg?b=1&s=612x612&w=0&k=20&c=EgRRmx3maR1aKsOlLHVYJSji3ekRlFmSFKICmPmCAv8='
  },
  {id:7,
    title: 'Tomatoes',
    description: 'Tomatoes are a fruit that is commonly used in cooking and can be eaten raw or cooked.',
    status: 'Green Fruit',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {id:8,
    title: 'Peanuts',
    description: 'Barley is a cereal grain that is commonly used in beer and whisky production.',
    status: 'Booting',
    image: 'https://images.pexels.com/photos/209371/pexels-photo-209371.jpeg?auto=compress&cs=tinysrgb&w=600'
  },

];

export const CropsComponent = () => {
  const [selectedCrops,setSelectedCrops]=useState<ICrops[]>([]);

  const handleSelectedCrops =(CropsItem:ICrops)=>{
    const itemIndex = selectedCrops.findIndex(item=>item.title===CropsItem.title);
    if (itemIndex !== -1){
      setSelectedCrops(prevSelectedCrops =>[...prevSelectedCrops.slice(0, itemIndex), ...prevSelectedCrops.slice(itemIndex + 1)])
    }
    else{
      setSelectedCrops(prevSelectedCrops=>[...prevSelectedCrops,CropsItem])
    }
  }

  const handleSelectedCardClick = (CropsItem: ICrops) => {
    setSelectedCrops(prevSelectedCards => prevSelectedCards.filter(item => item.id !== CropsItem.id));
  };

  const handleAddCrops = () => {
  
    console.log("Selected Crops:", selectedCrops);
  };

  return (

    <div>

      <div className="pb-4">
        <h1 className="text-xl  flex  p-3 rounded-md text-white bg-lime-900 font-medium mb-4">
        Select Crops that you have on your farm by clicking on the card
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
       
          {crops.map((crop, index) => (
            <div
              key={index}
              className={`relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 ${selectedCrops.some(item => item.id === crop.id) ? 'bg-green-400 text-white' : ''}`}   
              onClick={()=> handleSelectedCrops(crop)}
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
          ))}
        </div>
      </div>
      <div className="p-t-4">
     {selectedCrops.length > 0 && (<h1 className="text-xl flex items-center justify-between p-3 font-medium  rounded-md text-white bg-gray-600 mb-4">
          Selected Crops 
          <div className="flex items-center">
            <ShoppingCartIcon className="h-6 w-6 text-white mr-2" />
            <span className="bg-green-500 text-white text-sm rounded-full w-6 h-6 text-center flex items-center justify-center">
              {selectedCrops.length}
            </span>
          </div>
        </h1>)}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {selectedCrops.map((CropsItem) => (
            <div
              key={CropsItem.id}
              className="p-4 border rounded-md"
              onClick={() => handleSelectedCardClick(CropsItem)}
            >
              <img className="h-40 w-full object-cover mb-2 rounded-md" src={CropsItem.image} alt="" />
              <h3 className="text-lg font-medium mb-1">{CropsItem.title}</h3>
              <p className="text-sm text-gray-500">{CropsItem.status}</p>
            </div>
            
          ))}
        </div>
        {selectedCrops.length > 0 && (
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
            onClick={handleAddCrops}
          >
            Add Crops
          </button>
        )}
      </div>

    </div>
  );
};


export default CropsComponent;
