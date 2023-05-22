import { Menu, Transition } from "@headlessui/react"
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, MapPinIcon, EllipsisHorizontalIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"
import { classMerge } from "../../../utils"
import { IDashBoardCalendar } from ".."
import { PopUp } from "../../.."

export const DashBoardCalendar = (prop: IDashBoardCalendar) => {
    return (
        <>
            <div>
                <h2 className="text-base font-semibold leading-6 text-gray-900">Upcoming Events And Activities</h2>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                        <div className="flex items-center text-gray-900">
                            <button
                                type="button"
                                className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Previous month</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <div className="flex-auto text-sm font-semibold">January</div>
                            <button
                                type="button"
                                className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Next month</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                            <div>S</div>
                        </div>
                        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                            {prop.days.map((day, dayIdx) => (
                                <button
                                    key={day.date}
                                    type="button"
                                    className={classMerge(
                                        'py-1.5 hover:bg-gray-100 focus:z-10',
                                        day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                                        (day.isSelected || day.isToday) && 'font-semibold',
                                        day.isSelected && 'text-white',
                                        !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                                        !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                                        day.isToday && !day.isSelected && 'text-indigo-600',
                                        dayIdx === 0 && 'rounded-tl-lg',
                                        dayIdx === 6 && 'rounded-tr-lg',
                                        dayIdx === prop.days.length - 7 && 'rounded-bl-lg',
                                        dayIdx === prop.days.length - 1 && 'rounded-br-lg'
                                    )}
                                >
                                    <time
                                        dateTime={day.date}
                                        className={classMerge(
                                            'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                                            day.isSelected && day.isToday && 'bg-indigo-600',
                                            day.isSelected && !day.isToday && 'bg-gray-900'
                                        )}
                                    >
                                        {/* @ts-ignore */}
                                        {day.date.split('-').pop().replace(/^0/, '')}
                                    </time>
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="mt-8 w-1/2  rounded-md bg-lime-900 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">
                                <PopUp onClickTitile={' Add event'} popUpTittle={"Add Event"} popFunction={undefined} style={""} />
                            </div>
                        </div>



                    </div>
                    {

                        prop.meetings.length > 0 ? <>
                            <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                                {prop.meetings.map((meeting) => (
                                    <li className="relative flex space-x-6 py-6 xl:static">
                                        <img src={meeting.imageUrl} alt="" className="h-14 w-14 flex-none rounded-full" />
                                        <div className="flex-auto">
                                            <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3>
                                            <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                                <div className="flex items-start space-x-3">
                                                    <dt className="mt-0.5">
                                                        <span className="sr-only">Date</span>
                                                        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </dt>
                                                    <dd>
                                                        <time dateTime={meeting.datetime}>
                                                            {meeting.date} at {meeting.time}
                                                        </time>
                                                    </dd>
                                                </div>
                                                <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                                                    <dt className="mt-0.5">
                                                        <span className="sr-only">Location</span>
                                                        <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </dt>
                                                    <dd>{meeting.location}</dd>
                                                </div>
                                            </dl>
                                        </div>
                                        <Menu as="div" className="absolute right-0 top-6 xl:relative xl:right-auto xl:top-auto xl:self-center">
                                            <div>
                                                <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                                                    <span className="sr-only">Open options</span>
                                                    <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classMerge(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Edit
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classMerge(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Cancel
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </li>
                                ))}
                            </ol>
                        </> : <> <div className="font-semibold text-xl flex-none text-lime-800">
                            No Available Event/Activities Found
                        </div> </>
                    }

                </div>
            </div>

        </>
    )
}