/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { IProfile, IProfileData, ProfileProps } from "./ProfileDto/ProfileDto";
// import { device, data, farm, stock} from "./ProfileDto/ProfileStaticData"


export const ProfileComponent = ({data,device,farm,stock}: IProfileData) => {
    
    const [changeDetails, setChangeDetails] = useState(false);
    const [formData, setFormData] = useState({
            name: data.name,
            surname: data.surname,
            email: data.email,
            // password: data.password,
            website: data.website,
            homeAddress: data.homeAddress
        }
    )
    
    const onSubmit = () => {
        setChangeDetails(!changeDetails)
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
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* <!-- First column --> */}
                
                <div className=" bg-white rounded m-2 pb-6">
                <div className="p-2 h-40">
                  <img className=" mx-auto h-40 w-40 rounded-md border" src="https://th.bing.com/th/id/R.08637f47762d9826b134576b3d008a05?rik=4GVDJkAco4u7PQ&pid=ImgRaw&r=0" alt="" />
                </div>
                <div className="flex justify-between max-w-500 m-2">
                    <p className="text-2xl font-medium">My Profile</p>
                    <button
                    onClick={onSubmit}
                     className={`bg-lime-300 rounded-md text-white pl-4 pr-5 ${changeDetails ? "hidden": ""}`}>
                        edit
                    </button>
                </div>
                {/* <div className="border-t border-gray-400"></div> */}
                { Object.entries(formData).map(([key,value]) => {
                    return <> 
                    <form className={`p-4 ${changeDetails ? "": "hidden"}`}>
                        <input
                        type={key == "password" ? "password" : "text" }
                        id={key}
                        placeholder={`Enter ${key}`}
                        className="outline-none"
                        onChange={onChange}
                        />
                    </form>
                    <form className={`p-4 ${changeDetails ? "hidden": ""}`}>
                        <input
                        type={key == "password" ? "password" : "text" }
                        id={key}
                        value={value}
                        className="outline-none"
                        />
                    </form>
                    <div className="border-t border-lime-400 ml-4 mr-4"></div>
                    </>
                })}
                {changeDetails && <div className="flex justify-center">
                    <button 
                    onClick={onSubmit}
                    className="bg-lime-300 rounded-md text-white pl-4 pr-5 p-2 m-4">
                        Save
                    </button>
                </div>
                }
                </div>
                {/* ===========================================SECOND COLUMN============================================================= */}
                <div className="">
                <div className=" border-gray-400 mb-5 bg-white rounded-xl pb-6">
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

                </div>
                {/* ==========================second row============================================= */}
                <div className=" mb-5 mt-5 bg-white rounded-xl pb-6">
                <div className="flex justify-between max-w-500 m-2 p-2">
                    <p className="text-2xl font-medium">My Stock</p>
                </div>
                {stock.map((stock) => {
                   return <>
                    <div className="bg-gray-100 p-2 rounded-lg m-2">
                        <div className="text-orange-600 text-xl">{stock.itemName}</div>
                        <div className="text-gray-500 text-xs">R{stock.price} each | {stock.quantity}pack</div>
                    </div>
                   </> 
                })}
            </div>
                {/* ==========================third row============================================= */}
                <div className=" mb-5 mt-5 bg-white rounded-xl pb-6">
                <div className="flex justify-between max-w-500 m-2 p-2">
                    <p className="text-2xl font-medium">My devices</p>
                </div>
                {device.map((device) => {
                   return <>
                    <div className="bg-gray-100 p-2 rounded-lg m-2">
                        <div className="text-orange-600 text-xl">{device.name}</div>
                        <div className="text-gray-500 text-xs">{device.type}</div>
                    </div>
                   </> 
                })}
            </div>
                </div>
            </div>
            </div>
      </>
    );
  }