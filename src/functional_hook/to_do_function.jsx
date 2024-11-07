import { useState } from "react"


function To_do(){
    var [a,seta]=useState(0);
    var [obj,setobj]=useState([]);
    var che=(event)=>{
        seta(
            {[event.target.name] : event.target.value}
        )
    }
   var sub=(event)=>{
        event.preventDefault()
        
        setobj(
            [...obj,a]
        )
    }
    var del=(value,index)=>{
        var n=obj.filter((val,ind)=>{
            return index!=ind

        })
        setobj(n)
    }
    var edi=(val,index)=>{
        
           var p=prompt("enter the editing value")
           var u=[...obj]
            u.splice(index,1,p)

            setobj(u)
       
    }


    var res=obj.map((val,ind)=>{
        return (
            <>
            <tr>
                <td>{val["user"]}</td>
               <td><button onClick={()=>{del(val,ind)}}>delete</button></td> 
               <td><button onClick={()=>{edi(val,ind)}}>edit</button></td>
            </tr>
            </>
        )
    })
    return(
        <>
        {console.log(obj)}
        <h1>to_do_using functional compound</h1>

        <form action="" onSubmit={sub}>
            <input type="text" name="user"  onChange={che}/>
            
            <input type="submit" value="registar" />
        </form>
       <ul>{res}</ul>

        
        </>
    )
}
export default To_do 