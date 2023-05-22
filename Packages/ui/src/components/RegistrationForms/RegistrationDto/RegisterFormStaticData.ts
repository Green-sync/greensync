import { InputTypes } from "../RegistrationDto";


export const FarmFormStaticData: InputTypes[] = [

    {
        name: "name", type: "text", placeholder: 'Your Farm Name', id: 'name', label: 'Name of the Farm'
    },
    {
        name: "location", type: "text", placeholder: 'The Location Of your Farm', id: 'location', label: "Enter your Farm location"
    },
    {
        name: "size", type: "number", label: "Size Of The Farm in hectors", placeholder: 'Size of your farm in Hectors', id: 'size',
    },
    {
        name: "farmImg", type: "file", label: "Select an Image/logo that represent your farm", placeholder: 'Farm Image', id: 'farmImg',
    },
    {
        isTextArea: { cols: '5', rows: "5" }, label: 'Description', name: 'description', id: 'description', placeholder: 'Type Your Details about the farm'
    }
]

export const FarmerRegisterStaticData: InputTypes[] = [
    {
        name: "firstName", type: "text", placeholder: '', id: 'firstName', label: 'First Name'
    },
    {
        name: "lastName", type: "text", placeholder: '', id: 'lastName', label: "lastName"
    },
    {
        name: "phone", type: "tel", label: "Contact No", placeholder: '', id: 'phone',
    }

]