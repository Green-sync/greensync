import { ISelectDto, InputTypes } from ".";
import { FarmFormStaticData } from "./RegistrationDto/RegisterFormStaticData"



export const RegistrationFormComponent = () => {

    return (
        <div>
            <div className="bg-white dark:bg-white">

                <div className="flex justify-center items-center dark:bg-white  ">

                    <div className="w-4/5  bg-white border-b border-gray-200 md:p-8">

                        <form className="space-y-6">


                            {
                                FarmFormStaticData.map((input, index) => {
                                    return (
                                        <div key={index}>

                                            {
                                                input.type === 'text' ? <input type={input.type} name={input.name} id={input.id} className=" border-b border-grey-600 text-lime-900 text-sm  block w-full p-2.5 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-lime-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder={input.placeholder} required={true} /> :
                                                    input.type === 'radio' ? <>

                                                        <div key={index} className="relative h-10 w-72 min-w-[200px] mt-4">
                                                            <select className="peer mt-2 h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-blue-gray-200 empty:!bg-lime-800 focus:border-2 focus:border-lime-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                                                <label id={input.id} className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-lime-800 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-lime-800 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-lime-800 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                                    {input.label}
                                                                </label>
                                                                {input.isSelect?.map((data: ISelectDto, index: any) => {

                                                                    return (


                                                                        <>


                                                                            <option value={data.value}>{data.name}</option>




                                                                        </>
                                                                    )
                                                                })}
                                                            </select>
                                                        </div>
                                                    </> :
                                                        <textarea name={input.name} id={input.id} placeholder={input.placeholder} className="bg-gray-50 border h-28 dark:bg-inherit border-lime-300 text-gray-900 text-sm  focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required={true} />}

                                        </div>
                                    )
                                })
                            }
                            <button type="submit" className="w-36 text-white bg-lime-800 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-none">Register Farm</button>

                        </form>
                    </div>
                </div>

            </div>
        </div>




    )
}

export default RegistrationFormComponent;