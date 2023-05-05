import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { CardComponent } from '../Cards';
import CropsComponent from './CropsComponent';
import LivestockComponent from './LivestockComponent';

const FarmDetails = [
  {
    title: "Livestock",
    description: "Manage your Livestock",
    image: ""

  },
  {
    title: "Crops",
    description: "Manage your Crops",
    image: ""

  },
  {
    title: "Livestock and Crops",
    description: "Manage your Farm",
    image: ""

  }
]

export const CorouselComponent = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <div className="relative">
        <div className="relative flex items-center justify-center h-[50vh] ">
          <div className="w-full h-[50vh]">
            <div className="relative flex rounded-lg items-center justify-center h-[50vh]">
              <div className="absolute inset-0 rounded-lg bg-lime-900 opacity-70 z-10"></div>
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].caption}
                className="absolute rounded-lg inset-0 object-cover w-full h-[50vh]"
              />
              <div className="relative justify-center text-center z-10 text-white">
                <h1 className="text-4xl font-bold mb-4">
                  {slides[currentIndex].caption}
                </h1>
                <p className="px-20 mt-8 text-md">
                  {slides[currentIndex].description}
                </p>
                <button className='bg-yellow-600 mt-6 p-2 text-sm  text-white rounded-lg'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-transparent text-white rounded-full p-2 hover:bg-white hover:text-gray-900 transition-colors transition-opacity opacity-0 group-hover:opacity-100"
          onClick={goToPreviousSlide}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          className="absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-transparent text-white rounded-full p-2 hover:bg-white hover:text-gray-900 transition-colors transition-opacity opacity-0 group-hover:opacity-100"
          onClick={goToNextSlide}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>


      </div>
      <div className='grid grid-cols-3 justify-content-center items-center border-b-4 w-full'>
        {
          FarmDetails.map((farm, index) => (
            <div key={index} className="p-10">
              <CardComponent image={farm.image} title={farm.title} description={farm.description} />
            </div>
          ))
        }
      </div>
      <div className="p-6">
          <CropsComponent/>
      </div>
      <div className="p-6">
          <LivestockComponent/>
      </div>
    </div>

  );
};

export default CorouselComponent;
