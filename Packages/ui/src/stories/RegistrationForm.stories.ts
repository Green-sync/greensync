import { Meta, StoryObj } from "@storybook/react";
import { RegistrationFormComponent } from "../components";





const metaRegistrationForm = {
    component: RegistrationFormComponent,
    title: "Components/Registration",

} satisfies Meta<typeof RegistrationFormComponent>


export default metaRegistrationForm;
type registrationFormStory = StoryObj<typeof metaRegistrationForm>

export const FarmRegistrationForm: registrationFormStory = {


}