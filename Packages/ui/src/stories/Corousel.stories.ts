// import { Meta, StoryObj } from "@storybook/react";
// import CorouselSliderComponent from '../components/Farm/CorouselComponent';

// const Corousel = {
//   component: CorouselSliderComponent,
//   title: "Components/Farm/corousel",
//   args: {},
// }satisfies Meta<typeof CorouselSliderComponent>;

// export default Corousel;

// type CorouselStory = StoryObj<typeof CorouselSliderComponent>;

// export const Default: CorouselStory = {

// };
import { Meta, Story, StoryObj } from "@storybook/react";
import CorouselSliderComponent from '../components/Farm/CorouselComponent';

export default {
  component: CorouselSliderComponent,
  title: "Components/Farm/Corousel",
  args: {
    slides: [
        {
          image: "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Sustainable Farming Practices",
          description: "Discover sustainable farming practices that help preserve our natural resources while still maintaining high yields. From soil health to crop rotation and agroforestry, we cover it all."
        },
        {
          image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Small-Scale Farming",
          description: "Learn about small-scale farming and how it can be a viable option for producing high-quality crops and livestock. We'll discuss the benefits and challenges of small-scale farming and share tips for success."
        },
        {
          image: "https://images.pexels.com/photos/106162/wheat-wheat-spike-wheat-field-cornfield-106162.jpeg?auto=compress&cs=tinysrgb&w=600",
          caption: "Precision Agriculture",
          description: "Explore precision agriculture and how it's revolutionizing the farming industry. From precision planting to variable rate fertilization, we'll cover the latest technologies that can help increase yields and reduce costs."
        }
      ]
  },
  argTypes: {
    slides: { control: { disable: true } } // disable control for the slides array
  }
} as Meta<typeof CorouselSliderComponent>;

type CorouselStory = StoryObj<typeof CorouselSliderComponent>;

export const Default: CorouselStory = {
    
 };
