import { CheckCircleIcon, PlusIcon } from "@heroicons/react/20/solid"

export const FarmerCard = () => {
    return (
        <>

            <div>
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
                                Add New Farm
                                <div className="w-5"><PlusIcon /></div>

                            </button>
                        </div>
                    </div>

                    <div className="border-b text-lg flex justify-between align-middle ml-4 mt-4 flex-shrink-">
                        <div className="flex justify-start items-center">
                            <div className="w-4  text-lime-600">
                                <CheckCircleIcon />
                            </div>
                            <div className="ml-2 cursor-pointer font-bold">
                                Doorange
                            </div>
                        </div>
                        <div className="text-xs text-gray-500">
                            Crop : Live Stock
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}