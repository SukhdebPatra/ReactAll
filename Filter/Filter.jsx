import { useEffect, useState } from "react"
import DataTable from "./DataTable";


const Filter=()=>{
    const[data,setData]=useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response=>response.json())
        .then((json)=>setData(json));

    },[])



    return (
       
        <>
        <h1>Filter method</h1>
        <div>
            <DataTable data={data}/>
           
        </div>
        </>
    )
}

export default Filter