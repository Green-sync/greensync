import { Meta, StoryObj } from "@storybook/react";
import FarmComponent from '../components/Farm/FarmComponent';

const Farm = {
  component: FarmComponent,
  title: "Components/Farm",
  args: {},
}satisfies Meta<typeof FarmComponent>;

export default Farm;

type FarmStory = StoryObj<typeof FarmComponent>;

export const Default: FarmStory = {

};
