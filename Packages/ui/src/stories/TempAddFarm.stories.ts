import { Meta, StoryObj } from "@storybook/react";
import {TempAddFarm} from "../components/Farm/TempAddFarm"

const AddFarm = {
  component: TempAddFarm,
  title: "Components/TempAddFarm",
  args: {},
}satisfies Meta<typeof TempAddFarm>;

export default AddFarm;

type AddFarmStory = StoryObj<typeof TempAddFarm>;

export const Default: AddFarmStory = {

};
