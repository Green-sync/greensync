import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react'
import FarmTypeComponent from './FarmType/FarmTypeComponent';



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
        
        <div className="relative flex items-center justify-center h-[40vh] ">
          <div className="w-full h-[40vh]">
            <div className="relative flex rounded-lg items-center justify-center h-[40vh]">
              <div className="absolute inset-0 rounded-lg bg-lime-900 opacity-70 z-10"></div>
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].caption}
                className="absolute rounded-lg inset-0 object-cover w-full h-[40vh]"
              />
              <div className="relative justify-center text-center z-10 text-white">
                <h1 className="text-4xl font-bold mb-4">
                  {slides[currentIndex].caption}
                </h1>
                <p className="px-20 mt-8 text-md">
                  {slides[currentIndex].description}
                </p>
                <div className="p-4">
                <button className="items-center rounded-md  bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Learn More</button>
                </div>
             
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-transparent text-white rounded-full p-2 hover:bg-white hover:text-gray-900 text-transparent group-hover:opacity-100"
          onClick={goToPreviousSlide}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          className="absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-transparent text-white rounded-full p-2 hover:bg-white hover:text-gray-900 text-transparent  group-hover:opacity-100"
          onClick={goToNextSlide}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>


      </div>
      <div >
        {
          <FarmTypeComponent />
        }
      </div>
     
    </div>

  );
};

export default CorouselComponent;
