import {DefaultHeroTheme, WelcomeHeroTheme} from "./HeroThemes";

export const HeroComponentSwitch = ()=>{
    return {
        welcome: (data:any) => <WelcomeHeroTheme {...data}/>,
        aqua: (data:any)=> <> Aqua Theme {data.descriptio}</>,
        default: (data:any)=> <><DefaultHeroTheme {...data}/></>,
        field: ()=> <>field theme</>,
        crop: ()=> <>crop theme</>,
        farm: ()=> <>farm theme</>,
    }
}