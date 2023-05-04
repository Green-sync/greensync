import { IFarms, IProfile, IStock } from "./ProfileDto";

export const data: IProfile = {
    name: "John",
    surname: "Doe",
    email: "johndoe@gmail.com",
    password: "*******",
    website: "www.johndoe.co.za"
}

export const farm: IFarms[] = [{
    name: "DelportFarm",
    farmType: "Crops",
    location: "Centurion"
},
{
    name: "OrangeFarm",
    farmType: "Crops",
    location: "Soshanguve"
},
{
    name: "idontknow",
    farmType: "livestock",
    location: "Hamskraal"
},
]

export const stock: IStock[] = [{
    itemName: "Tomatos",
    quantity: 5,
    price: 65
}, 
{
    itemName: "Onions",
    quantity: 0,
    price: 0
},
{
    itemName: "",
    quantity: 0,
    price: 0
}]