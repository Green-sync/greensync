/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { IProfile, IProfileData } from "./ProfileDto/ProfileDto";
import { data, farm, stock} from "./ProfileDto/ProfileStaticData"


export const ProfileComponent = () => {
    
    const [changeDetails, setChangeDetails] = useState(true);
    const [formData, setFormData] = useState(
        {
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password,
            website: data.website
        }
    )
    

    const onSubmit = () => {
        console.log("Clicked")
    }
    const onChange = (e : any) => {
    const { name, value } = e.target
    //@ts-ignore
       setFormData({...formData, [name]: value })
    }
    return (
        <>
         <div className="container p-6 bg-gray-100">
            <div className="flex m-2">
                {/* <!-- First column --> */}
                <div className="w-1/2 bg-white rounded m-2">
                <div className="p-2 h-40">
                  <img className=" mx-auto h-40 w-40 rounded-md border" src="https://via.placeholder.com/50" alt="" />
                </div>
                <div className="flex justify-between max-w-500 m-2">
                    <p className="text-2xl font-medium">My Profile</p>
                </div>
                {/* <div className="border-t border-gray-400"></div> */}
                {Object.entries(formData).map(([key,value]) => {
                    return <>
                    <form className="p-4">
                            {/* <label className="">
                                {key}: 
                            </label> */}
                        <input
                        type={key == "password" ? "password" : "text" }
                        id={key}
                        className="outline-none"
                        // value={value}
                        onChange={onChange}
                        />
                    </form>
                    <div className="border-t border-lime-400 ml-4 mr-4"></div>
                    </>
                })}
                {changeDetails && Object.entries(formData).map(([key,value]) => {
                    return <>
                    <form className="p-4">
                            {/* <label className="">
                                {key}: 
                            </label> */}
                        <input
                        type={key == "password" ? "password" : "text" }
                        id={key}
                        className="outline-none"
                        value={value}
                        onChange={onChange}
                        />
                    </form>
                    <div className="border-t border-lime-400 ml-4 mr-4"></div>
                    </>
                })}
                <div className="flex justify-center">
                    <button className="bg-lime-300 rounded-md text-white pl-4 pr-5 p-2 m-4">
                        Save
                    </button>
                </div>
                 </div>
                 {/* </div> */}
                {/* <!-- Second column --> */}
                <div className="w-1/2 ">
                <div className=" border-gray-400 mb-5 bg-white rounded">
                <div className="flex justify-between max-w-500 m-2 p-2">
                    <p className="text-2xl font-medium">My Farms</p>
                </div>
                {farm.map((farm) => {
                   return <>
                    <div className="bg-gray-100 p-2 rounded-md m-2">
                        <div className="text-orange-600 text-xl">{farm.name}</div>
                        <div className="text-gray-500 text-xs">{farm.location} | {farm.farmType}</div>
                    </div>
                   </> 
                })}
                <div className="flex justify-center">
                    <button className="bg-lime-300 rounded-md text-white pl-4 pr-5 p-2 m-4">
                        Save
                    </button>
                </div>

                </div>
                {/* ==========================second row============================================= */}
                <div className="h-1/2 mb-5 mt-5 bg-white rounded">
                <div className="flex justify-between max-w-500 m-2 p-2">
                    <p className="text-2xl font-medium">My Stock</p>
                </div>
                {stock.map((stock) => {
                   return <>
                    <div className="bg-gray-100 p-2 rounded-md m-2">
                        <div className="text-orange-600 text-xl">{stock.itemName}</div>
                        <div className="text-gray-500 text-xs">R{stock.price} each | {stock.quantity}pack</div>
                    </div>
                   </> 
                })}
                <div className="flex justify-center">
                    <button className="bg-lime-300 rounded-md text-white pl-4 pr-5 p-2 m-4">
                        Save
                    </button>
                </div>
            </div>
                </div>
            </div>
            </div>
      </>
    );
  }