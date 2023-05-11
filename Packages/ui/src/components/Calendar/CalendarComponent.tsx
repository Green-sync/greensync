/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { classMerge } from '../../utils'
import { CalendarProps, TCalendarType } from './CalendarDto/CalendarDto'
import { DashBoardCalendar, DashBoardCalendarStaticData, HomeCalendar } from '.'



export const CalendarComponent = ({ days, events, ctype }: CalendarProps) => {
  return (

    <>
      {
        ctype === 'HomeView' ? <>
          <HomeCalendar days={days} events={events} ctype={'HomeView'} />
        </> : <DashBoardCalendar meetings={DashBoardCalendarStaticData.meetings} days={DashBoardCalendarStaticData.days} ctype={'DashboardView'} />
      }
    </>

  )
}

export default CalendarComponent;