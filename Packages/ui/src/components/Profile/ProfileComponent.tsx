/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { IProfileData } from "./ProfileDto/ProfileDto";
import { PopUp } from "../..";
import { useMutation, useQuery } from "@apollo/client";
import { FarmProfile } from "./FarmProfile";
import { StockProfile } from "./StockProfile";
import { DeviceProfile } from "./DeviceProfile";
import { GET_PROFILE, UPDATE_PROFILE } from "../Home/schema";

export const ProfileComponent = () => {
    const [open, setOpen] = useState(false);
    const [changeDetails, setChangeDetails] = useState(false);
    const [formData, setFormData] = useState({
    //   firstName: '',
    //   email: '',
    //   lastName: '',
    //   phone: '',
    });
  
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
            variables: { updates: formData,profileId: "QX6rh3ZavEctoz9xRrgT2ZxwpBzy"},
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
                
            </div> 
        {/* </div> */}
      </>
    );
};