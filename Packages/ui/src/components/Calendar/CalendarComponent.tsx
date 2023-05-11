/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { classMerge } from '../../utils'
import { CalendarProps, TCalendarType } from './CalendarDto/CalendarDto'
import { HomeCalendar } from '.'



export const CalendarComponent = ({ days, events, ctype }: CalendarProps) => {
  return (

    <>
      {
        ctype === 'HomeView' ? <>
          <HomeCalendar days={days} events={events} ctype={'HomeView'} />
        </> : <><HomeCalendar days={[]} events={[]} ctype={'MainView'} /></>
      }
    </>

  )
}

export default CalendarComponent;