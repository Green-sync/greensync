/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { IProfile } from "./ProfileDto/ProfileDto";
import {data} from "./ProfileDto/ProfileStaticData"


export const ProfileComponent = () => {
    const [changeDetails, setChangeDetails] = useState(false);
    const [formData, setFormData] = useState<IProfile>()

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
                  <img className=" mx-auto h-40 w-40 rounded-full border" src="https://via.placeholder.com/50" alt="" />
                </div>
                <div className="flex justify-between max-w-500 m-2">
                    <p className="font-medium">My Profile</p>
                    <button className="bg-lime-300 rounded-md text-white p-1" onClick={() => {changeDetails && onSubmit()
                        setChangeDetails((prevState) => !prevState)}}>
                        {changeDetails ? 'done' : 'edit'}
                    </button>
                </div>
                {Object.entries(data).map(([key,value]) => {
                    return <>
                    <form className="p-2">
                            <label>
                                {key}: 
                            </label>
                        <input
                        type='text'
                        id='name'
                        className="h-12 w-full"
                        // value={value}
                        onChange={onChange}
                        />
                    </form>
                    </>
                })}
                   
                 </div>
                 {/* </div> */}
                {/* <!-- Second column --> */}
                <div className="w-1/2 ">
                <div className="h-1/2 border-gray-400 mb-5 bg-white rounded">
                <div className="flex justify-between max-w-500 m-2 p-2">
                    <p className="font-medium">My Farms</p>
                    <button className="bg-lime-300 rounded-md text-white p-1" onClick={() => {changeDetails && onSubmit()
                        setChangeDetails((prevState) => !prevState)}}>
                        {changeDetails ? 'done' : 'edit'}
                    </button>
                </div>

                </div>
                <div className="h-1/2 mb-5 mt-5 bg-white rounded">
                <div className="flex justify-between max-w-500 m-2 p-2">
                    <p className="font-medium">My Stock</p>
                    <button className="bg-lime-300 rounded-md text-white p-1" onClick={() => {changeDetails && onSubmit()
                        setChangeDetails((prevState) => !prevState)}}>
                        {changeDetails ? 'done' : 'edit'}
                    </button>
                </div>
                </div>
                </div>
            </div>
            </div>
      </>
    );
  }