import { Meta, StoryObj } from "@storybook/react";
import {CalendarComponent, CalendarStaticData } from '../components'




const metaCalendar = {
    component: CalendarComponent,
    title: "Components/Calendar",
    
} satisfies Meta<typeof CalendarComponent>


export default metaCalendar;
type calendarStory  = StoryObj<typeof metaCalendar>

export const DashboardCalendar: calendarStory = {
    args: {
        ...CalendarStaticData 
    }

}

