import { Component } from "react";
class To extends Component{
    constructor(){
        super()
        this.state=({
            obj:[]
        })
    }
    che=(event)=>{
        event.preventDefault();

        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    sub=(e)=>{
        e.preventDefault();
        var u={
            username:this.state.user,
            password:this.state.pass
        }
        this.setState({
            obj:[...this.state.obj,u]
        })
    }
    del=(value,ind)=>{
        var res=this.state.obj.filter((val,ind)=>{
            return val!==value
        })
        this.setState({
            obj:res
        })
    }

    edi=(val,ind)=>{
     var p=prompt("enter user name")
        var p1=prompt("enteer password")
        var u={
            username:p,
            password:p1
        }
        this.state.obj.splice(ind,1,u)
        this.setState({
            obj:this.state.obj
        })


    }
    render(){
        console.log(this.state.obj)
        var res=this.state.obj.map((val,ind,arr)=>{
            return (
                <>
                <tr>
                    <td>{val["username"]}</td>
                    <td>{val["password"]}</td>
                    <button onClick={()=>this.del(val,ind)
                    }>deelete</button>
                    <button onClick={()=>{this.edi(val,ind)
                    }}>edit</button>
                </tr>
                </>
            )
        })
        return(
            <>
            <h1>class</h1>
            <form action="" onSubmit={this.sub}>
                <input type="text" name="user" onChange={this.che}/>
                <input type="text" name="pass" onChange={this.che}/>
                <input type="submit" value="regi" />
            </form>
            <table border={2}>{res}</table>

            </>
        )
    }
}
export default To;