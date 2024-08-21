import React, { useState } from "react";

 function Product (){
    let [counter, setcounter] = useState(1)

return <div>
        <h2> Message comp</h2>
        <h2> Wish Message : {counter}</h2>
        <button onClick={()=>{ setcounter(counter -1) }}>sub</button>
        <button onClick={()=>{ setcounter(counter +1) }}>add</button>
      </div>;
 }
export default Product;



