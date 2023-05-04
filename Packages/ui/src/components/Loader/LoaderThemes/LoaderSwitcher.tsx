import { PlaceholderLoader } from "./PlaceholderLoader"
import { SpinnerLoader } from "./SpinnerLoader"

export const LoaderSwitcher = () => {
    return {
        spinner: (msg:string)=><><SpinnerLoader msg={msg}/></>,
        placeholder: (msg:string)=> <PlaceholderLoader msg={msg}/>
    }
}