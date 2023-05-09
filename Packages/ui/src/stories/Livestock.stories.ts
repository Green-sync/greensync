import { Meta, StoryObj } from "@storybook/react";
import LivestockComponent from "../components/Farm/LivestockComponent";

const LiveStock = {
  component: LivestockComponent,
  title: "Components/Livestock",
  args: {},
}satisfies Meta<typeof LivestockComponent>;

export default LiveStock;

type LiveStockStory = StoryObj<typeof LivestockComponent>;

export const Default: LiveStockStory = {

};
