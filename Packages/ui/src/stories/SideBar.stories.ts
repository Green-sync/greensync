import { Meta, StoryObj } from "@storybook/react";
import { Loader } from "../components";
import SideBarComponent from "../components/Navigation/SideBar/SideBarComponet";

const SideBar = {
  component: SideBarComponent,
  title: "Components/SideBar",
  args: {},
} satisfies Meta<typeof SideBarComponent>;

export default SideBar;
type SideBarStory = StoryObj<typeof SideBar>;

export const Default: SideBarStory = {
  args: {},
};
