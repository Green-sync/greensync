const crops: Crop[] = [
  {
    name: 'Wheat',
    description: 'Wheat is a cereal grain that is commonly cultivated for its seed.',
    status: 'Growth Stage: Heading',
  },
  {
    name: 'Corn',
    description: 'Corn is a popular crop that is used for both food and fuel.',
    status: 'Growth Stage: Tasseling',
  },
  {
    name: 'Soybeans',
    description: 'Soybeans are a legume that is commonly used for animal feed and processed food products.',
    status: 'Growth Stage: Podding',
  },
 
];

const livestock = [
  {
    name: 'Cattle',
    description: 'Cattle are domesticated animals raised for meat, milk and hides.',
    status: 'Healthy'
  },
  {
    name: 'Sheep',
    description: 'Sheep are domesticated animals raised for their wool, meat and milk.',
    status: 'Healthy'
  },
  {
    name: 'Goats',
    description: 'Goats are domesticated animals raised for their milk, meat and hides.',
    status: 'Healthy'
  },
];

export const FarmComponent = () => {
  return (
    
    <div className=" lg:space-y-8 justify-center">
       <div className="flex items-center justify-center h-full lg:h-auto lg:mt-8">
  {/* Carousel section */}
  <div className="flex flex-col justify-content-center items-center">
  <div className="w-full lg:w-1/2">
    <h2 className="text-lg font-bold flex items-center justify-center  mb-4">Crops Farms</h2>
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
  <div className="w-full mt-10 lg:w-1/2">
    <h2 className="text-lg flex items-center justify-center font-bold mb-4">Livestock Farms</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {livestock.map((animal, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-md">
          <div className="p-4">
            <h3 className="text-base font-semibold mb-2">{animal.name}</h3>
            <p className="text-sm mb-4">{animal.description}</p>
            <p className="text-xs">{animal.status}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

</div>
    </div>
  );
};


export default FarmComponent;
