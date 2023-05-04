import { IFarms, IProfile } from "./ProfileDto";

export const data: IProfile = {
    name: "John",
    surname: "Doe",
    email: "johndoe@gmail.com",
    password: "*******"
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
}]