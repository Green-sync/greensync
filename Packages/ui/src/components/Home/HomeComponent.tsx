/* eslint-disable no-unsafe-optional-chaining */
import { useMutation, useQuery } from "@apollo/client";
import { CalendarComponent, FarmerCard, GreenSyncContext } from ".."
import { CalendarStaticData } from "../.."
import { ADD_PROFILE, GET_PROFILE } from "./schema";
import { useContext, useState } from "react";

const InternalComp = ({GreetingMessage}:any) => {
    return <>
      <div className="text-lg text-lime-700 font-semibold">
                {GreetingMessage()}
            </div>
            {/**This is the main container Div which will curry all the compoent in main  */}
            <div className="container p-10 ">


                {/** This Div controls all the section to be two an side by side */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">

                    <div className='grid grid-cols-1 gap-2 sm:grid-cols-1'>

                        <div className="rounded-lg shadow p-4 m-3 text-3xl">
                            <CalendarComponent days={CalendarStaticData.days} events={CalendarStaticData.events} ctype={'HomeView'} />

                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-2 sm:grid-cols-1'>

                        <div className="rounded-lg shadow p-4 m-3  text-3xl">
                            <FarmerCard />
                        </div>

                        <div className="rounded-lg shadow p-4 m-3 text-3xl">

                        </div>
                    </div>

                </div>


            </div>
    </>
 }

 export const GreetingMessage = () => {
    let greeting: string;
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    return greeting
}
export const HomeComponent = () => {
    const {data,loading} = useQuery(GET_PROFILE);
    const [addProfile] = useMutation(ADD_PROFILE)
    const context = useContext(GreenSyncContext)
    // @ts-ignore
    const [firstName, lastName] = context?.displayName?.split(" ")
    const email= context?.email as string

    const [regData,setRegData] = useState({
        firstName,
        lastName,
        email,
        phone:""
    })
    const handleChange = (e:any)=>{
        setRegData({...regData, [e.target.id]: e.target.value})
    }
    const handleSubmit = async(e:any)=>{
        e.preventDefault()
        const {data,errors} = await addProfile({
            variables: {
                profile: regData
            }
        });

        if(errors){
            console.log(errors)
        }
        console.log(data);

    }
    return (

        <>
        {
            !loading && data ?<>
            {
                data.getProfile.success? <InternalComp GreetingMessage={GreetingMessage}/>:
                <>
                <pre>
                    {
                        JSON.stringify(data,null,2)
                    }
                </pre>
                    Please Complete your Account to propceed
                    <form onSubmit={handleSubmit} onChange={handleChange} >
                        <div className="my-2">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="" name="firstName" id="firstName" defaultValue={firstName} /></div>
                        <div className="my-2">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="" name="lastName" id="lastName" defaultValue={lastName} /></div>
                        <div className="my-2">
                            <label htmlFor="email">E-mail Address</label>
                            <input type="text" className="" name="email" id="email" defaultValue={email} /></div>
                        <div className="my-2">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" className="" placeholder="Phone number" name="phone" id="phone" /></div>
                        <div className="my-2">
                            <input type="submit" value={"Save Details"} /></div>
                    </form>
                </>
            }
            
            </>:<></>
}

        </>
    )
}
