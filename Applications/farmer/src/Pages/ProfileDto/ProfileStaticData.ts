import { IDevice, IFarms, IProfile, IProfileData } from "./ProfileDto";

export const ProfileStaticData: IProfileData = {
data: {
    name: "John",
    surname: "Doe",
    email: "johndoe@gmail.com",
    // password: "*******",
    website: "www.johndoe.co.za",
    homeAddress: "Pretoria 1052"
},

farm: [{
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
}
,
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
],
 stock: [{
    itemName: "Tomatos",
    quantity: 5,
    price: 65
}, 
{
    itemName: "Onions",
    quantity: 10,
    price: 100
},
{
    itemName: "Cows",
    quantity: 2,
    price: 10000
}],

device: [{
    name: "Google sensor detector",
    type: "sensor",
},
{
    name: "Amazon Echo Plus",
    type: "speaker lol",
}]

}