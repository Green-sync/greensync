

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


export const LivestockComponent= () => {
  return (

    <div>

     
      <div className="">
      <h1 className="text-2xl flex items-center justify-center p-3 rounded-md text-white bg-yellow-600 font-bold mb-4">My Livestock</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {livestock.map((livestock, index) => (
            <div
              key={index}
              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
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
        </div>
      </div>

    </div>
  );
};


export default LivestockComponent;
