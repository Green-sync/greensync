import { CorouselComponent, FarmComponent, Loader } from "../components";


const slides= [
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

export const HomePage = () => {
    return {
        home: <><Loader type="placeholder" msg="welcome home"/></>,
        profile: <>Profile</>,
        weather: <>Weather</>,
        calendar: <>Calendar</>,
        farm: <><CorouselComponent slides={slides}/></>,
        recent: <>recent</>,
        marketplace: <>marketplace</>,
        iot: <>iot</>,
        education: <>Education</>,

    }
};


export default HomePage