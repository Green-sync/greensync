import { Meta, StoryObj } from "@storybook/react";
import CropsComponent from "../components/Farm/CropsComponent";

const Farm = {
  component: CropsComponent,
  title: "Components/Farm",
  args: {},
}satisfies Meta<typeof CropsComponent>;

export default Farm;

type FarmStory = StoryObj<typeof CropsComponent>;

export const Default: FarmStory = {

};
