import { InputTypes } from ".";
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
                                                input.type === 'text' ? <input type={input.type} name={input.name} id={input.id} className=" border-b border-lime-600 text-lime-900 text-sm  focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white dark:border-lime-500  dark:text-white" placeholder={input.placeholder} required={true} /> :
                                                    input.type === 'radio' ? <>
                                                        {input.isSelect?.map((data: any, index: any) => {


                                                            <>
                                                                <ul key={index} className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                                                        <div className="flex items-center pl-3">
                                                                            <input
                                                                                id={data.name}
                                                                                type="radio"
                                                                                value={data.value}
                                                                                name={input.name}
                                                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                                            />

                                                                            <label
                                                                                htmlFor={data.name}
                                                                                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                            >
                                                                                {data.name}
                                                                            </label>
                                                                        </div>
                                                                    </li>

                                                                </ul>
                                                            </>

                                                        })}
                                                    </> :
                                                        <textarea name={input.name} id={input.id} placeholder={input.placeholder} className="bg-gray-50 border h-28 dark:bg-inherit border-lime-300 text-gray-900 text-sm  focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required={true} />}

                                        </div>
                                    )
                                })
                            }
                            <button type="submit" className="w-36 text-white bg-lime-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-none">Register Farm</button>

                        </form>
                    </div>
                </div>

            </div>
        </div>




    )
}

export default RegistrationFormComponent;