/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CalendarProps} from './CalendarDto/CalendarDto'
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