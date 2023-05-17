import { Meta, StoryObj } from "@storybook/react";
import { WeatherComponent } from '../components'




const metaCalendar = {
    component: WeatherComponent,
    title: "Components/weather",
    
} satisfies Meta<typeof WeatherComponent>


export default metaCalendar;
type weatherStory  = StoryObj<typeof metaCalendar>

export const DashboardCalendar: weatherStory = {
    args: {
     
    }

}

