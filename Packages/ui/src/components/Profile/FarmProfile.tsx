import { MapPinIcon } from "@heroicons/react/20/solid"
import { IFarms, IProfileData } from "./ProfileDto"
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
  ];

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
export const FarmProfile = (ProfileStaticData : IProfileData) => {
  const [view, setView] = useState("farmType")

    const handleView = (e: any) => {
      const id = e.target.id
      setView(id)
    }
    console.log(ProfileStaticData.data)
    return(
        <>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-2xl w-full">
        <img
          src="farm-image.jpg" // Replace with the actual farm image URL
          alt="Farm"
          className="w-full rounded-lg mb-6"
        />

        <h1 className="text-2xl md:text-3xl font-semibold mb-2">Farm Name</h1>
        <p className="text-gray-600 mb-4">Location</p>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum felis quis libero
            consectetur, at euismod neque tincidunt. Ut id metus quis neque viverra eleifend. Suspendisse
            hendrerit auctor dolor ut venenatis.
          </p>
        </div>

        {crops && crops.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Crops</h2>
            <ul className="list-disc list-inside">
              {crops.map((crop,i) => (
                <li key={i}>{crop.title}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold mb-2">Land Management</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum felis quis libero
            consectetur, at euismod neque tincidunt. Ut id metus quis neque viverra eleifend. Suspendisse
            hendrerit auctor dolor ut venenatis.
          </p>
        </div>
      </div>
    </div>
        </>
    )
}