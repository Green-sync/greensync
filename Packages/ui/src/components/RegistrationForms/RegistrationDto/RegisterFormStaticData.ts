import { InputTypes } from "../RegistrationDto";


export const FarmFormStaticData: InputTypes[] = [

    {
        name: "farmName", type: "text", placeholder: 'Your Farm Name', id: 'farmName', label: 'Name of the Farm'
    },
    {
        name: "location", type: "text", placeholder: 'The Location Of your Farm', id: 'location', label: "Enter your Farm location"
    },
    {
        name: "size", type: "text", label: "Size Of The Farm in hectors", placeholder: 'Size of your farm in Hectors', id: 'size',
    },
    {
        name: "farmImg", type: "file", label: "Select an Image/logo that represent your farm", placeholder: 'Farm Image', id: 'farmImg',
    },
    {
        isTextArea: { cols: '5', rows: "5" }, label: 'Description', name: 'description', id: 'description', placeholder: 'Type Your Details about the farm'
    }
]