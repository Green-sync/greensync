/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useContext, useEffect, useState } from "react";
import { GreenSyncContext, PopUp } from "../..";
import { useMutation, useQuery } from "@apollo/client";
import { FarmProfile } from "./FarmProfile";
import { DeviceProfile } from "./DeviceProfile";
import { GET_PROFILE } from "../Home/schema";
import { UPDATE_PROFILE } from "./GRAPHQL/mutation";
import { StockProfile } from ".";

export const ProfileComponent = () => {
    const [open, setOpen] = useState(false);
    const [changeDetails, setChangeDetails] = useState(false);
    const context = useContext(GreenSyncContext)
    const [formData, setFormData] = useState({});
  
    const { data, loading, error } = useQuery(GET_PROFILE);
    const [ editUser ] = useMutation(UPDATE_PROFILE)
  
    useEffect(() => {
      if (!loading) {
        if (data && data.getProfile && data.getProfile.profile) {
            const { firstName, email, lastName, phone } = data.getProfile.profile;
            setFormData({
              firstName: firstName,
              email: email,
              lastName: lastName,
              phone: phone,
            });
            // console.log("form", formData);
            // console.log("Dineo", data.getProfile.profile);
        }
      }
      if (error) {
        console.log(error);
      }
    }, [data, loading, error]);
  
        const onState = () => {
        setChangeDetails(!changeDetails)
    }

    const onChange = (e : any) => {
    const id = e.target.id
    //@ts-ignore
    formData[`${id}`] = e.target.value
       setFormData({...formData})
       console.log(formData)
    }
    const handleProfileUpdate = async (e: any) => {
        e.preventDefault();
        const { data: editedUserData, errors } = await editUser({
            variables: { updates: formData,profileId: context?.uid},
          });
          console.log(editedUserData)
        setChangeDetails(!changeDetails)
      };
    return (
      <>
         <div className="container p-6 bg-gray-100">
            {/* <div className="grid grid-cols-1 md:grid-cols-2">
                {/* <!-- First column --> */}
                <div>
                <div className=" bg-white rounded m-2 pb-6">
                <div className="p-2 h-40">
                  <img className=" mx-auto h-40 w-40 rounded-md border" src={ data.photoURL ? `${data.photoURL}` : "https://th.bing.com/th/id/R.08637f47762d9826b134576b3d008a05?rik=4GVDJkAco4u7PQ&pid=ImgRaw&r=0"} alt="" />
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
                    onClick={handleProfileUpdate}
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
                    <form 
                    // onSubmit={checkPassword}
                    >
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
                {farmData.length > 0 ? farmData.map((farm: any) => {
                   return <>
                    <div  className="bg-gray-100 p-2 rounded-md m-2">
                        
                        <div className="text-orange-600 text-xl">{farm.name}</div>
                        <div className="text-gray-500 text-xs">{farm.location} | {farm.farmType}</div>
                        {/* //@ts-ignore */}
                        <button
                        className="bg-lime-300 rounded-md text-white pl-4 pr-5">
                        <PopUp onClickTitile={"view more >"} popUpTittle={`${farm.name} Farming`} popFunction={<FarmProfile name={farm.name} type={farm.type} location={farm.location} size={farm.size} />} style={"sm:max-w-auto"} /></button>
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
                        ><PopUp onClickTitile={"view more >"} popUpTittle={`${stock.itemName}`} popFunction={<StockProfile />} /></button>
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
                        ><PopUp onClickTitile={"view more >"} popUpTittle={`${device.name}`} popFunction={<DeviceProfile />}/></button>
                    </div>
                   </> 
                }) : <div className="text-sm font-medium text-center text-orange-600 m-4">You dont own devices at the moment</div>}
            </div>
                </div>
            </div> 
        {/* </div> */}
      </>
    );
};