import { HeroComponentProps } from "./HeroDto";
import {HeroComponentSwitch} from "./HeroComponentSwitch";

export const HeroComponent =({ type, data }: HeroComponentProps) =>{
    console.log(type, data)
    return  HeroComponentSwitch()[type](data)

}

export default HeroComponent
