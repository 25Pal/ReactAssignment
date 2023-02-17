import { useState } from "react";
import React from "react";
// import axios from "axios"
import Card from './card'

const GetData = function () {
    const [data, setData] = useState([])
    async function fetchData() {
        let apiData = await fetch("https://jsonplaceholder.typicode.com/posts")
        let newData = await apiData.json()//it hase converted {} to [] format // it simply help use to get proper data from the link that we wwant

        setData(newData)


    };

    return (
        <div>
            <h1 style={{display:"flex", justifyContent:"center", marginTop:"5px"}}>Click on the below Button </h1>
            <button style={{marginLeft:"850px", height:"50px" , width:"100px" , borderRadius:"50px" , color:"white" ,cursor:"pointer",backgroundColor:"black"}} onClick={fetchData}>GetData</button>
            {

                data.map((x, index) => {
                   
                    return (
                        <Card
                        key={x.id}
                        id={x.id}
                        title={x.title}
                        body={x.body}
                        />
                    )
                })
            }

        </div>
    )
}
export default GetData;