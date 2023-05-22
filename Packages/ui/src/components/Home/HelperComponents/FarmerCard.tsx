import { CheckCircleIcon, PlusIcon } from "@heroicons/react/20/solid"
import { PopUp, RegistrationFormComponent } from "../../.."
import { FarmStaticData, IFarmData } from "../.."
import { useQuery } from "@apollo/client"
import { GET_FARMS } from "../schema"

export const FarmerCard = () => {

    const { data, loading } = useQuery(GET_FARMS);

    return (
        <>
            {
                !loading ?


                    <div>
                        <div>

                        </div>
                        <div className=" border-gray-200 bg-white px-4 py-5 sm:px-6">
                            <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap border-b">
                                <div className="ml-4 mt-4">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900">Farms</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        This is a list of your farms
                                    </p>
                                </div>
                                <div className="ml-4 mt-4 flex-shrink-0">
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center  px-3 py-2 text-sm font-semibold text-indigo-500 "
                                    >
                                        <div><PopUp onClickTitile={"Add Farm"} popUpTittle={"Add Your Farm"} popFunction={<RegistrationFormComponent />} style={"sm:max-w-lg"} /></div>
                                        <div className="w-5"><PlusIcon /></div>

                                    </button>
                                </div>
                            </div>
                            {
                                data.getFarm.length > 0 ? (
                                    data.getFarm.map((data: IFarmData, index: any) => {
                                        return (
                                            <>
                                                <div key={index} className="border-b text-lg flex justify-between align-middle ml-4 mt-4 flex-shrink-">
                                                    <div className="flex justify-start items-center">
                                                        <div className="w-4  text-lime-600">
                                                            <CheckCircleIcon />
                                                        </div>
                                                        <div className="ml-2 cursor-pointer font-bold">
                                                            {data.name}
                                                        </div>
                                                    </div>


                                                </div>
                                            </>
                                        )
                                    })
                                    // Render when data exists

                                ) : (
                                    // Render when data is empty or undefined
                                    <div className="text-lg pt-4 font-extrabold text-lime-800">You Can Now Add Your Farms</div>
                                )
                            }



                        </div>

                    </div> : <>{loading}</>
            }
        </>
    )
}