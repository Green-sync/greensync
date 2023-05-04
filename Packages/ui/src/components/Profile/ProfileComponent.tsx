

export const UserProfileComp = () => {
    return (
        <>
            <div className="container">
                <div className="flex justify-end text-cyan-600">  <p>Edit Profile</p></div>
                <div className="flex justify-evenly items-end">
                    <p className="text-xl font-medium text-gray-900 dark:text-white ">User Profile</p>
                    <div>
                        <div className="flex items-center">
                            <div>
                                <img title="click here to eddit profile"
                                    className="inline-block h-9 w-9 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Baatile Langa</p>
                                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Farmer</p>
                                <p className="text-xs font-medium text-lime-600 group-hover:text-lime-700">Youe have 1 Active farm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white dark:bg-white">
                        <div className="flex justify-center items-center dark:bg-white m-9 ">
                            <div className="w-4/5 p-4   md:p-8">
                                <form className="">
                                    <div className="flex justify-items-start">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                User Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    value={'Baatile'}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-5">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Last Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    value={'Langa'}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={'baatile@opher.co.za'}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder=""
                                        />
                                    </div>

                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Location
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="location"
                                            id="location"
                                            value={'116 Mofokeng Street 012 Sauls ville '}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder=""
                                        />
                                    </div>
                                </form>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}