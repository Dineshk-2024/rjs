import React from "react";

let Cart = (props) =>{

    return <div>
        <h2>Cart component</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h2>productName : {props.product.phone}</h2>
    </div>
}
export default Cart