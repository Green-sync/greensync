import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import React, { useState } from 'react';
import LivestockComponent from "../LivestockComponent";

interface ILivestockItem {
  title: string;
  description: string;
  status: string;
  image: string;
}

interface DisplayLiveStocksProps {
  livestock: ILivestockItem[];
}

const DisplayLiveStocks: React.FC<DisplayLiveStocksProps> = ({ livestock }) => {
  const [showLivestock, setShowLivestock] = useState(false);

  const handleAddLivestock = () => {
    setShowLivestock(true);
  };

  return (
    <div className="pt-4">
      {!showLivestock && (
        <>
          <h1 className="text-xl flex items-center justify-between p-3 font-medium rounded-md text-white bg-gray-600 mb-4">
            My Livestocks
            <div className="flex items-center">
              <ClipboardDocumentListIcon className="h-6 w-6 text-white mr-2" />
              <span className="bg-green-500 text-white text-sm rounded-full w-6 h-6 text-center flex items-center justify-center">
                {livestock.length}
              </span>
            </div>
          </h1>
          <div className="p-2">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
              onClick={handleAddLivestock}
            >
              Add Livestocks
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {livestock.map((item) => (
              <div key={item.title} className="p-4 border rounded-md">
                <img className="h-40 w-full object-cover mb-2 rounded-md" src={item.image} alt="" />
                <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.status}</p>
              </div>
            ))}
          </div>
        </>
      )}
      {showLivestock && <LivestockComponent />}
    </div>
  );
};

export default DisplayLiveStocks;
