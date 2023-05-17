/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { IProfileData } from "./ProfileDto/ProfileDto";
import { PopUp } from "../..";
import { FarmProfile } from "./FarmProfile";
import { StockProfile } from "./StockProfile";
import { DeviceProfile } from "./DeviceProfile";


export const ProfileComponent = (ProfileStaticData : IProfileData) => {

    const [open, setOpen] = useState(false)
    const [changeDetails, setChangeDetails] = useState(false);
    const [formData, setFormData] = useState({
            name: ProfileStaticData.data.name,
            surname: ProfileStaticData.data.surname,
            email: ProfileStaticData.data.email,
            website: ProfileStaticData.data.website,
            homeAddress: ProfileStaticData.data.homeAddress,
            phoneNumber: ProfileStaticData.data.phoneNumber,
        }
    )
    const onState = () => {
        setChangeDetails(!changeDetails)
        console.log("Clicked")
    }
    const checkPassword = (e: any) => {
        e.preventDefault()
        const confirmPassword = ProfileStaticData.data.password
        const password = e.target.value 
        if(confirmPassword === password){
            console.log("confirmed")
        }
        else {
            console.log("wrong password")
        }
    }
    const updatePassword = (e: any) => {
        const newPassword = e.target.value
        ProfileStaticData.data.password = newPassword;
        // setFormData()
    }

    const onChange = (e : any) => {
    const id = e.target.id
    //@ts-ignore
    formData[`${id}`] = e.target.value
       setFormData({...formData})
    }
    return (
        <>
         <div className="container p-6 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* <!-- First column --> */}
                <div>
                <div className=" bg-white rounded m-2 pb-6">
                <div className="p-2 h-40">
                  <img className=" mx-auto h-40 w-40 rounded-md border" src={ ProfileStaticData.data.photoURL ? `${ProfileStaticData.data.photoURL}` : "https://th.bing.com/th/id/R.08637f47762d9826b134576b3d008a05?rik=4GVDJkAco4u7PQ&pid=ImgRaw&r=0"} alt="" />
                </div>
                <div className="flex justify-between max-w-500 m-2">
                    <p className="text-2xl font-medium">My Profile</p>
                    <button
                    onClick={onState}
                     className={`bg-lime-300 rounded-md text-white pl-4 pr-5 ${changeDetails ? "hidden": ""}`}>
                        edit
                    </button>
                </div>
                { Object.entries(formData).map(([key,value]) => {
                    return <> 
                    <form className={`p-4 ${changeDetails ? "": "hidden"}`}>
                        <input
                        type={key == "password" ? "password" : "text" }
                        id={key}
                        placeholder={`Enter ${key}`}
                        className="outline-none w-full"
                        onChange={onChange}
                        />
                    </form>
                    <form className={`p-4 ${changeDetails ? "hidden": ""}`}>
                        <input
                        type={key == "password" ? "password" : "text" }
                        id={key}
                        value={value !== "" ? value : `edit ${key}`}
                        className={`outline-none w-full ${value == "" ? "text-gray-500" : ""}`}
                        />
                    </form>
                    <div className="border-t border-lime-400 ml-4 mr-4"></div>
                    </>
                })}
                {changeDetails && <div className="flex justify-center">
                    <button 
                    onClick={onState}
                    className="bg-lime-300 rounded-md text-white pl-4 pr-5 p-2 m-4">
                        Save
                    </button>
                </div>
                }
                </div>
                <div className=" bg-white rounded m-2 pb-6 pt-4">
                <div className="flex justify-between max-w-500 m-2">
                   { !open && <><p className="text-lg  font-sm">Password</p><p className="text-lg  font-sm">*******</p><button
                                    onClick={() => setOpen(!open)}
                                    className="bg-lime-300 rounded-md text-white pl-4 pr-5">Reset</button></>}
                 </div>
                {
                    open && <div className="m-4">Reset Password
                    <form onSubmit={checkPassword}>
                        <input type="password" placeholder="Enter Current Password" className="outline-none w-full m-4"/>
                        <div className="border-t border-lime-400 ml-4 mr-4"></div>
                        <input id="confirm" onChange={() => ""} type="password" placeholder="Enter new Password" className="outline-none w-full m-4"/>
                        <div className="border-t border-lime-400 ml-4 mr-4"></div>

                        <div className="m-4 justify-end flex">
                        <button onClick={() => setOpen(!open)} className="bg-lime-300 rounded-md text-white pl-4 pr-5 m-2">Cancel</button>
                        <button type="submit" className="bg-lime-300 rounded-md text-white pl-4 pr-5 m-2">Save</button>
                        </div>
                    </form>
                    
                    </div>
                }
                </div>
                </div>
                {/* ===========================================SECOND COLUMN============================================================= */}
                <div className="">
                <div className=" border-gray-400 mb-5 bg-white rounded-xl pb-6">
                <div className="flex justify-between max-w-500 m-2 p-2">
                    <p className="text-2xl font-medium">My Farms</p>
                </div>
                {ProfileStaticData.length > 0 ? ProfileStaticData.farm.map((farm: any) => {
                   return <>
                    <div  className="bg-gray-100 p-2 rounded-md m-2">
                        
                        <div className="text-orange-600 text-xl">{farm.name}</div>
                        <div className="text-gray-500 text-xs">{farm.location} | {farm.farmType}</div>
                        <button
                        className="bg-lime-300 rounded-md text-white pl-4 pr-5"
                        ><PopUp onClickTitile={"view more >"} popUpTittle={`${farm.name} Farming`} popFunction={<FarmProfile name={farm.name} farmType={farm.farmType} location={farm.location} size={farm.size} image={farm.image}  />} style={"sm:max-w-auto"} /></button>
                    </div>
                   </> 
                }) : <div className="text-sm font-medium text-center text-orange-600 m-4">No farms added</div> }

                </div>
                {/* ==========================second row============================================= */}
                <div className=" mb-5 mt-5 bg-white rounded-xl pb-6">
                <div className="flex justify-between max-w-500 m-2 p-2">
                    <p className="text-2xl font-medium">MarketPlace Stock</p>
                </div>
                {ProfileStaticData.stock.length > 0 ? ProfileStaticData.stock.map((stock: any) => {
                   return <>
                    <div className="bg-gray-100 p-2 rounded-lg m-2">
                        <div className="text-orange-600 text-xl">{stock.itemName}</div>
                        <div className="text-gray-500 text-xs">R{stock.price} each | {stock.quantity}pack</div>
                        <button
                        className="bg-lime-300 rounded-md text-white pl-4 pr-5"
                        ><PopUp onClickTitile={"view more >"} popUpTittle={`${stock.itemName}`} popFunction={<StockProfile itemName={stock.itemName} quantity={stock.quantity} price={stock.price} />} style={""} /></button>
                    </div>
                   </> 
                }) : <div className="text-sm font-medium text-center text-orange-600 m-4">No Stocks in the market at the moment</div>}
            </div>
                {/* ==========================third row============================================= */}
                <div className=" mb-5 mt-5 bg-white rounded-xl pb-6">
                <div className="flex justify-between max-w-500 m-2 p-2">
                    <p className="text-2xl font-medium">My devices</p>
                </div>
                {ProfileStaticData.device.length > 0 ? ProfileStaticData.device.map((device: any) => {
                   return <>
                    <div className="bg-gray-100 p-2 rounded-lg m-2">
                        <div className="text-orange-600 text-xl">{device.name}</div>
                        <div className="text-gray-500 text-xs">{device.type}</div>
                        <button
                        className="bg-lime-300 rounded-md text-white pl-4 pr-5"
                        ><PopUp onClickTitile={"view more >"} popUpTittle={`${device.name}`} popFunction={<DeviceProfile name={device.name} type={device.type} image={device.image} />} style={""} /></button>
                    </div>
                   </> 
                }) : <div className="text-sm font-medium text-center text-orange-600 m-4">You dont own devices at the moment</div>}
            </div>
                </div>
            </div>
            </div>
      </>
    );
  }