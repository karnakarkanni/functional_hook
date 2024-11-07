import { useEffect, useState } from "react"


function Api() {
    var [a, seta] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {
            seta(data)
        })
    })
    var res = a.map((val, ind) => {
        return (<>
            <div id="k1">
                <div >
                    <h5>id:{val["id"]}</h5>
                    <p>title:{val["title"]}</p>
                    <p>description:{val["category"]}</p>
                    <p>price:{val["price"]}</p>
                    <img src={val["image"]} alt="" width={200} height={250} />
                    <button>see more</button>
                </div>
            </div>
        </>)
    })
    return (<>
        <h1  >hlo this is api page</h1>
        <div id="k2" >{res}</div>
    </>)
}
export default Api;
