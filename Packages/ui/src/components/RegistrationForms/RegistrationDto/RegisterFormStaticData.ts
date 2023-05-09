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
        isTextArea: { cols: '10', rows: "10" }, label: 'Description', name: 'description', id: 'description', placeholder: 'Type Your Details about the farm'
    },
    {
        isSelect: [{ name: 'CROP', value: "CROP" }, { name: 'LIFESTOCK', value: "LIFESTOCK" }, { name: 'BOTH', value: "BOTH" },], name: 'farmingtype', label: "Select The Type Of Farming", id: 'farmingType', type: 'radio'
    }
]