import { useParams } from "react-router-dom";




export const HomePage = () => {
    return <><h1>  {useParams().id? useParams().id: 'Home'} Page </h1></>
};
