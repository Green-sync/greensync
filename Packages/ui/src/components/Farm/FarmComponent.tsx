
const crops: Crop[] = [
  {
    name: 'Crop 1',
    description: 'This is the description of Crop 1.',
    status: 'Growth Stage: Seedling',
  },
  {
    name: 'Crop 2',
    description: 'This is the description of Crop 2.',
    status: 'Growth Stage: Vegetative',
  },
  {
    name: 'Crop 3',
    description: 'This is the description of Crop 3.',
    status: 'Growth Stage: Flowering',
  },
];

export const FarmComponent = () => {
  return (
    
    <div className=" lg:space-y-8 justify-center">
      
      {/* Carousel section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-lg font-bold mb-4">Crops Farms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {crops.map((crop, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <h3 className="text-base font-semibold mb-2">{crop.name}</h3>
                <p className="text-sm mb-4">{crop.description}</p>
                <p className="text-xs">{crop.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Cards section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-lg font-bold mb-4">Livestock Farms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {crops.map((crop, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <h3 className="text-base font-semibold mb-2">{crop.name}</h3>
                <p className="text-sm mb-4">{crop.description}</p>
                <p className="text-xs">{crop.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default FarmComponent;
