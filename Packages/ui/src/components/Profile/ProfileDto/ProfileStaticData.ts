import { IProfileData, FarmDto } from "./ProfileDto";


export const Farm: FarmDto[] =  [
   {
    name: "Green Acres Farm",
    type: "CROPS",
    location: "Centurion, PTA",
    size: "100 hectors",
    image: "https://images.pexels.com/photos/872483/pexels-photo-872483.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Happy Hens Farm",
    type: "LIVESTOCKS",
    location: "Krugersdorp, JHB",
    size: "50 hectors",
    image: "https://images.pexels.com/photos/39351/purple-grapes-vineyard-napa-valley-napa-vineyard-39351.jpeg?auto=compress&cs=tinysrgb&w=600"
},
{
  name: "Golden Fields Farm",
  type: "Livestock and Crops",
  location: "Dalmada, PLK",
  size: "200 hectors"
}] 


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

farm: [
   {
    name: "Delport",
    farmType: "Crops",
    location: "Centurion",
    size: 105,
    image: "https://th.bing.com/th/id/R.08637f47762d9826b134576b3d008a05?rik=4GVDJkAco4u7PQ&pid=ImgRaw&r=0"
},
{
    name: "Orange",
    farmType: "Crops",
    location: "Soshanguve",
    size: 265,
    image: "https://th.bing.com/th/id/R.08637f47762d9826b134576b3d008a05?rik=4GVDJkAco4u7PQ&pid=ImgRaw&r=0"
},
{
    name: "idontknow",
    farmType: "livestock",
    location: "Hamskraal",
    size: 1.7,
    image: "https://th.bing.com/th/id/R.08637f47762d9826b134576b3d008a05?rik=4GVDJkAco4u7PQ&pid=ImgRaw&r=0"
}
],
 stock: [
    {
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
}
],

device: [
    {
    name: "Google sensor detector",
    type: "sensor",
    image: ""
},
{
    name: "Amazon Echo Plus",
    type: "speaker lol",
    image: ""

}
],

// onChange: (e : any) => {
//     const id = e.target.id
//     formData[`${id}`] = e.target.value
//        setFormData({...formData})
//     }

}