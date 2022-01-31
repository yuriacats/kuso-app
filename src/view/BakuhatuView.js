import React from "react";
import Bommmmm from "../component/Bommmm"
import Bommmmu from "../component/Bommmu"
function getRandomInt(max) {
    return Math.floor(Math.random()*max)
}
const BakuhatuView = () =>{
    if(getRandomInt(2)==0){return(
       <>
           <h1>爆発！！</h1>
          <Bommmmm/>

       </>
    );}
    return(<>
        <h1> 爆発！！</h1>
        <Bommmmu/>
    </>);
}
export default BakuhatuView;