import React, { useEffect, useState } from "react"
import axios from "axios"

const NewComponent = ()=>{
    const [name,setName] = useState('')



const fetchData= async()=>{
   
   const data = await axios.get('https://dummyjson.com/products/1')
   console.log(data);
}

    useEffect(()=>{
        fetchData()
    },[])


    return(
        <div>
          <input type="text" value={name} onChange={(e)=>{
            
            setName(e.target.value)}}/>
           <button >click</button>
        </div>
    )
}

export default NewComponent
