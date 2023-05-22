import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { classMerge } from "../../../utils"
import { CalendarProps } from "../CalendarDto"
import { PopUp } from "../../.."


export const HomeCalendar = (prop: CalendarProps) => {


    return (
        <>
            <div>



                <div className="flex items-center">
                    <h2 className="flex-auto text-sm font-semibold text-gray-900">January 2022</h2>
                    <button
                        type="button"
                        className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">Previous month</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">Next month</span>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                    <div>S</div>
                </div>
                <div className="mt-2 grid grid-cols-7 text-sm">
                    {prop.days.map((day, dayIdx) => (
                        <div key={day.date} className={classMerge(dayIdx > 6 && 'border-t border-gray-200', 'py-2')}>
                            <button
                                type="button"
                                className={classMerge(
                                    day.isSelected && 'text-white',
                                    !day.isSelected && day.isToday && 'text-indigo-600',
                                    !day.isSelected && !day.isToday && day.isCurrentMonth && 'text-gray-900',
                                    !day.isSelected && !day.isToday && !day.isCurrentMonth && 'text-gray-400',
                                    day.isSelected && day.isToday && 'bg-indigo-600',
                                    day.isSelected && !day.isToday && 'bg-gray-900',
                                    !day.isSelected && 'hover:bg-gray-200',
                                    (day.isSelected || day.isToday) && 'font-semibold',
                                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                )}
                            >
                                {/* @ts-ignore */}
                                <time dateTime={day.date}>{day.date.split('-').pop().replace(/^0/, '')}</time>
                            </button>
                        </div>
                    ))}
                </div>
                <section className="mt-12">

                    {
                        prop.events.length > 0 ? <>
                            <h2 className="text-base font-semibold leading-6 text-gray-900">
                                Schedule for <time dateTime="2022-01-21">January 21, 2022</time>
                            </h2>
                            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500 w-full">

                                {prop.events.map((meeting, index: number) => (
                                    <>
                                        <PopUp onClickTitile={<li
                                            key={index}
                                            className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
                                        >
                                            <img src={meeting.imageUrl} alt="" className="h-10 w-10 flex-none rounded-full" />
                                            <div className="flex-auto">
                                                <p className="text-gray-900">{meeting.name}</p>
                                                <p className="mt-0.5">
                                                    <time dateTime={meeting.startDatetime}>{meeting.start}</time> -{' '}
                                                    <time dateTime={meeting.endDatetime}>{meeting.end}</time>
                                                </p>
                                                <p className="text-lime-900 font-extrabold">{meeting.description}</p>
                                            </div>

                                        </li>} popUpTittle={""} popFunction={undefined} style={""} />

                                    </>))}
                            </ol>


                        </> : <>
                            <div className="text-lg font-semibold text-lime-800 ">No Schedules Available For The Day</div>
                        </>
                    }


                </section>
            </div>
        </>
    )
}