import { Meta, StoryObj } from "@storybook/react";
import { CalendarStaticData, PopUpComponent } from '../components'





const metaPopUp = {
    component: PopUpComponent,
    title: "Components/PopUp",



} satisfies Meta<typeof PopUpComponent>


export default metaPopUp;
type PopUpStory = StoryObj<typeof metaPopUp>

export const PopUpView: PopUpStory = {

    args: {
        onClickTitile: 'Click Up here',
        popUpTittle: 'Information',
        popFunction: () => 'Here there'
    }


}