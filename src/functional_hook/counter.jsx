import { useState } from "react"
function Counter(){
   var [a,seta]=useState(0);
   


    var inc=()=>{
        seta(a+1)
    }
   var dec=()=>{
        seta(
           a-1
        )
    }
    return(<>
    <h1>counter </h1>
    <button onClick={dec}>decrement</button>
     <span>{a}</span>
     <button onClick={inc}>increment</button>
    </>)
}
export default Counter