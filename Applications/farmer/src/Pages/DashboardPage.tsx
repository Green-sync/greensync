/* eslint-disable @typescript-eslint/ban-ts-comment */
import { HomePage, Profile } from "greensync-ui";
import { useParams } from "react-router-dom";
import { ProfileStaticData } from "./ProfileDto";
import { useState } from "react";

export const DashboardPage = () => {
    const [formData, setFormData] = useState({
            name: ProfileStaticData.data.name,
            surname: ProfileStaticData.data.surname,
            email: ProfileStaticData.data.email,
            website: ProfileStaticData.data.website,
            homeAddress: ProfileStaticData.data.homeAddress
        }
    )
    // const checkPassword = (e: any) => {
    //     e.preventDefault()
    //     const confirmPassword = data.password
    //     // const password = e.target.value 
    //     if(confirmPassword === password){
    //         console.log("confirmed")
    //     }
    //     else {
    //         console.log("wrong password")
    //     }
    // }
    // const updatePassword = (e: any) => {
    //     const newPassword = e.target.value
    //     data.password = newPassword;
    //     // setFormData()
    // }
    // const onChange = (e : any) => {
    // const id = e.target.id
    // //@ts-ignore
    // formData[`${id}`] = e.target.value
    //    setFormData({...formData})
    // }
    //@ts-ignore
    return <Profile type={"farmer"} data={ProfileStaticData} formData={formData}/>
};


// import { HomePage } from "greensync-ui";
// import { useParams } from "react-router-dom";

// export const DashboardPage = () => {
//     const {id} = useParams()
//     /// @ts-ignore
//     return HomePage()[id? id: "home"]
// };