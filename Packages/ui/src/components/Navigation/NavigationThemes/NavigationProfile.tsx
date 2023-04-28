import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { User } from "firebase/auth"
import { Fragment } from "react"

const extractInitials = (name: string): string => {
    const [firstname, lastname] = name.split(" ");

    return `${firstname[0]}${lastname[0]}`;
}

export const NavigationProfileComponent = ({navData, user}: any) => {
    const { displayName, photoURL } = user
    console.log(navData)
    console.log(user)
    return <>
        <div>
            <Menu as="div" className="relative mt-2">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    {
                        photoURL ? <img
                            className="h-3 w-3 rounded-full bg-gray-50"
                            src={photoURL}
                            alt=""
                        /> :
                            <p className="bg-lime-900 h-3 w-3 text-white rounded-full p-6 mb-4 flex justify-center items-center">{extractInitials(displayName as string)}</p>
                    }
                    <span className="hidden lg:flex lg:items-center">
                        <span className="ml-4 text-sm font-semibold leading-6 mb-4 text-gray-900" aria-hidden="true">
                            {/* LOGGED IN USERNAME  */}
                            {displayName}
                        </span>
                        <ChevronDownIcon className="ml-2 mb-4 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        {navData.map((item: any) => (
                            <Menu.Item key={item.name}>
                                {({ active }) => (
                                    <a
                                        // href={item.href}
                                        className={`
                                ${active ? 'bg-green-50' :
                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    </>
}