import { Meta, StoryObj } from "@storybook/react";
import {FarmTypeComponent} from "../components/Farm/FarmType"

const Farm = {
  component: FarmTypeComponent,
  title: "Components/FarmType",
  args: {},
}satisfies Meta<typeof FarmTypeComponent>;

export default Farm;

type FarmStory = StoryObj<typeof FarmTypeComponent>;

export const Default: FarmStory = {

};
