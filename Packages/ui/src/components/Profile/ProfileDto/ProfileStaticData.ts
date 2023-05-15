import { IProfileData } from "./ProfileDto";

export const ProfileStaticData: IProfileData = {
data: {
    name: "John",
    surname: "Doe",
    phoneNumber: "",
    email: "johndoe@gmail.com",
    password: "neo",
    website: "www.johndoe.co.za",
    homeAddress: "Pretoria 1052",
    photoURL: "https://th.bing.com/th/id/R.08637f47762d9826b134576b3d008a05?rik=4GVDJkAco4u7PQ&pid=ImgRaw&r=0"
},

farm: [{
    name: "DelportFarm",
    farmType: "Crops",
    location: "Centurion",
    size: 1.7,
    image: ""
},
{
    name: "OrangeFarm",
    farmType: "Crops",
    location: "Soshanguve",
    size: 1.7,
    image: ""
},
{
    name: "idontknow",
    farmType: "livestock",
    location: "Hamskraal",
    size: 1.7,
    image: ""
}
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
}],

// onChange: (e : any) => {
//     const id = e.target.id
//     formData[`${id}`] = e.target.value
//        setFormData({...formData})
//     }

}