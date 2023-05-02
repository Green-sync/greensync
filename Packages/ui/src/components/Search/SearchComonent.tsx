import { useState } from "react";

const employees = {
    marketing: [],
    social: [],
    accounting: {}
}

const names = [
    {name: '', emai: ""}
]

const info = `dhdhhshs shshgsbs  sgs sgssg g`

export const SearchComponent = ({searchPrompt, searchData}: any) => {

    const [value, setValue] = useState("")
    const filterData = (e:any ) => {
        setValue(e.target.value)
      }
    
      const filteredData = searchData.filter((item: any) =>
        value == '' ?  item : item[searchPrompt].toLowerCase().includes(value.toLowerCase())
      );
    

    return <>
        <form className="flex items-center self-stretch justify-start" >
            <input type="text" onChange={filterData} className="w-full p-2" placeholder={`Search ${searchPrompt}...`} />
        </form>
       
    </>
}

export default SearchComponent