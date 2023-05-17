import { useMutation } from "@apollo/client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import { ADD_LIVESTOCK } from "./schema";


interface ILivestockItem {
  title: string;
  description: string;
  status: string;
  image: string;
  id?:number
}

const livestock: ILivestockItem[] = [
  {id:1,
    title: 'Cattle',
    description: 'Cattle are domesticated mammals that are raised for meat, dairy products, and leather.',
    status: 'Growth Stage: Adult',
    image: 'https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {id:2,
    title: 'Pigs',
    description: 'Pigs are intelligent, social animals that are raised for meat and other products.',
    status: 'Growth Stage: Piglet',
    image: 'https://images.pexels.com/photos/14534682/pexels-photo-14534682.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {id:3,
    title: 'Sheep',
    description: 'Sheep are domesticated mammals that are raised for wool, meat, and milk.',
    status: 'Growth Stage: Lamb',
    image: 'https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {id:4,
    title: 'Chickens',
    description: 'Chickens are domesticated birds that are raised for their meat and eggs.',
    status: 'Growth Stage: Chick',
    image: 'https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {id:5,
    title: 'Goats',
    description: 'Goats are domesticated mammals that are raised for their milk, meat, and wool.',
    status: 'Growth Stage: Kid',
    image: 'https://images.pexels.com/photos/3193155/pexels-photo-3193155.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];
export const LivestockComponent = () => {
  // const [addFarm] = useMutation(ADD_LIVESTOCK)
  const [selectedLivestocks, setSelectedLivestocks] = useState<ILivestockItem[]>([]);

  const handleCardClick = (livestockItem: ILivestockItem) => {
    const itemIndex = selectedLivestocks.findIndex(item => item.title === livestockItem.title);
    if (itemIndex !== -1) {
      setSelectedLivestocks(prevSelectedCards => [...prevSelectedCards.slice(0, itemIndex), ...prevSelectedCards.slice(itemIndex + 1)]);
    } else {
      setSelectedLivestocks(prevSelectedCards => [...prevSelectedCards, livestockItem]);
    }
  };

  const handleSelectedCardClick = (livestockItem: ILivestockItem) => {
    setSelectedLivestocks(prevSelectedCards => prevSelectedCards.filter(item => item.id !== livestockItem.id));
  };

  const handleAddLivestocks = async () => {
    // DatabaseService.addFarm(selectedLivestocks)
    // const {data,errors} = await addFarm({
    //   variables: selectedLivestocks
    // })
    // if(errors) {
    //   console.log(errors)
    // }
    // console.log(data)

    console.log("Selected Livestocks:", selectedLivestocks);
  };

  return (
    <div>
      
      <div className="pb-10">
      <h1 className="text-xl flex items-center justify-between p-3 font-medium  rounded-md text-white bg-yellow-600 mb-4">
          Select Livestocks that you have on your farm by clicking on the card
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          
          {livestock.map((livestockItem, index) => (
            <div
              key={index}
            className={`relative flex items-center space-x-3 rounded-lg border ${selectedLivestocks.some(item => item.id === livestockItem.id) ? 'bg-green-400 text-white' : 'border-gray-300 bg-white'} px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400`}
            onClick={() => handleCardClick(livestockItem)}
            >
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={livestockItem.image} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{livestockItem.title}</p>
                  <p className="truncate text-sm text-gray-500">{livestockItem.status}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-t-4">
     {selectedLivestocks.length > 0 && (<h1 className="text-xl flex items-center justify-between p-3 font-medium  rounded-md text-white bg-gray-600 mb-4">
          Selected Livestocks 
          <div className="flex items-center">
            <ShoppingCartIcon className="h-6 w-6 text-white mr-2" />
            <span className="bg-green-500 text-white text-sm rounded-full w-6 h-6 text-center flex items-center justify-center">
              {selectedLivestocks.length}
            </span>
          </div>
        </h1>)}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {selectedLivestocks.map((livestockItem) => (
            <div
              key={livestockItem.id}
              className="p-4 border rounded-md"
              onClick={() => handleSelectedCardClick(livestockItem)}
            >
              <img className="h-40 w-full object-cover mb-2 rounded-md" src={livestockItem.image} alt="" />
              <h3 className="text-lg font-medium mb-1">{livestockItem.title}</h3>
              <p className="text-sm text-gray-500">{livestockItem.status}</p>
            </div>
            
          ))}
        </div>
        {selectedLivestocks.length > 0 && (
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
            onClick={handleAddLivestocks}
          >
            Add Livestocks
          </button>
        )}
      </div>
    </div>
  );
};

export default LivestockComponent;