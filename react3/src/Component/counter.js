import { useState } from "react"

export default function Counter(){
const[counter,setCounter]=useState(0)

    return (
        <div style={{ marginTop:"140px" , border:"5px solid black" , marginLeft:"400px", 
        marginRight:"400px" ,height:"45vh" ,backgroundColor:"Black", paddingLeft:"200px", paddingTop:"100px", paddingBottom:"0px", boxShadow:"10px 10px 10px grey"}} > 
        <button onClick={()=>{setCounter(counter+1)}} style={{cursor:"pointer"}}>Increament</button>
        <h1 style={{color:"whitesmoke"}}>Count:{counter} </h1>
        <button onClick={()=>{setCounter(counter-1)}}style={{cursor:"pointer"}}>Decreament</button>
        </div>
    )
}