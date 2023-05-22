import { useMutation, useQuery } from "@apollo/client";
import { CalendarComponent, FarmerCard, GreenSyncContext, Loader } from ".."
import { CalendarStaticData } from "../.."
import { ADD_PROFILE, GET_PROFILE } from "./schema";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const InternalComp = ({ GreetingMessage }: any) => {
    return <>
        <div className="text-lg text-lime-700 font-semibold">
            {GreetingMessage()}
        </div>
        {/**This is the main container Div which will curry all the compoent in main  */}
        <div className="container p-10 ">


            {/** This Div controls all the section to be two an side by side */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">

                <div className='grid grid-cols-1 gap-2 sm:grid-cols-1'>
                    <div className="rounded-lg shadow p-4 m-3  text-3xl">
                        <FarmerCard />
                    </div>

                    <div className="rounded-lg shadow p-4 m-3 text-3xl hidden">

                    </div>


                </div>

                <div className='grid grid-cols-1 gap-2 sm:grid-cols-1'>

                    <div className="rounded-lg shadow p-4 m-3 text-3xl">
                        <CalendarComponent days={CalendarStaticData.days} events={CalendarStaticData.events} ctype={'HomeView'} />

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
    const { data, loading } = useQuery(GET_PROFILE);
    const [addProfile] = useMutation(ADD_PROFILE)
    const context = useContext(GreenSyncContext)
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const location = useLocation();

    // @ts-ignore
    const [firstName, lastName] = context?.displayName?.split(" ")
    const email = context?.email as string

    const [regData, setRegData] = useState({
        firstName,
        lastName,
        email,
        phone: ""
    })
    const handleChange = (e: any) => {
        setRegData({ ...regData, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const { data, errors } = await addProfile({
            variables: {
                profile: regData
            }
        });


        if (errors) {
            console.log(errors)
        }
        console.log(data);
        setSuccessMessage('Profile successfully updated.');




    }

    const FunctionReload = () => {
        window.location.reload(); // Reload the page
        Loader
    }

    return (

        <>
            {
                !loading && data ? <>
                    {
                        data.getProfile.success ? <InternalComp GreetingMessage={GreetingMessage} /> :
                            <>

                                {
                                    !successMessage && (
                                        <>

                                            <div className=" flex justify-center items-center mb-5 text-xl font-semibold text-lime-700">
                                                Please Complete your Account to propceed
                                            </div>

                                            <div>
                                                <div className="bg-white dark:bg-white">

                                                    <div className="flex justify-center items-center dark:bg-white  ">

                                                        <div className="w-1/2  bg-white border rounded-md border-gray-200 md:p-8">
                                                            <form onChange={handleChange}>
                                                                <div className="relative z-0 w-full mb-6 group">
                                                                    <input type="email" name='email' placeholder="" required value={email} id='email' className="block py-2.5 px-0 w-full text-sm font-light text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-lime-700 dark:focus:border-lime-700 focus:outline-none focus:ring-0 focus:border-lime-700 peer" />
                                                                    <label htmlFor='email' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-700 peer-focus:dark:text-lime-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                                                </div>
                                                                <div className="relative z-0 w-full mb-6 group">
                                                                    <input type="text" name='firstName' placeholder="" required defaultValue={firstName} id={firstName} className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-700 focus:outline-none focus:ring-0 focus:border-lime-700 peer" />
                                                                    <label htmlFor='firstName' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-700 peer-focus:dark:text-lime-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fist Name</label>
                                                                </div>
                                                                <div className="relative z-0 w-full mb-6 group">
                                                                    <input type="text" name='lastNamr' placeholder="" required defaultValue={lastName} id={lastName} className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-700 focus:outline-none focus:ring-0 focus:border-lime-700 peer" />
                                                                    <label htmlFor='email' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-700 peer-focus:dark:text-lime-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                                                                </div>
                                                                <div className="relative z-0 w-full mb-6 group">
                                                                    <input type="tel" name='phone' placeholder="" required id='phone' className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-lime-700 focus:outline-none focus:ring-0 focus:border-lime-700 peer" />
                                                                    <label htmlFor='phone' className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-700 peer-focus:dark:text-lime-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact No</label>
                                                                </div>

                                                                <button type="submit" onClick={handleSubmit} className="w-36 text-white bg-lime-800 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-none">Complete</button>
                                                            </form>


                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    )


                                }
                                {successMessage && (
                                    <>
                                        <div className='w-1/2 border-lime-900'>

                                        </div>
                                        <div className="flex justify-center items-center mb-5 text-xl font-semibold text-lime-700">
                                            {successMessage}
                                        </div>
                                        <div className='flex justify-center items-center'>
                                            <button type="submit" onClick={FunctionReload} className="w-36 mt-4 text-white bg-lime-800 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-none">Proceede</button>
                                        </div>

                                    </>
                                )}

                            </>
                    }

                </> : <></>
            }

        </>
    )
}
